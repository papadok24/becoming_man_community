import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { H3Event } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const

type AllowedMimeType = typeof ALLOWED_TYPES[number]

interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
          id: number
          supabase_user: string
          profile_img: string | null
          email: string
          full_name: string
        }
        Insert: {
          supabase_user: string
          profile_img?: string | null
          email: string
          full_name: string
        }
        Update: {
          profile_img?: string | null
        }
      }
    }
    Buckets: {
      avatar: {
        Row: {
          name: string
          owner: string
          file_size: number
          created_at: string
          updated_at: string
          bucket_id: string
          mime_type: AllowedMimeType
        }
      }
    }
  }
}

class UploadError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500
  ) {
    super(message)
    this.name = 'UploadError'
  }
}

async function validateUpload(file: { filename?: string; type?: string; data: Buffer }) {
  if (!file.filename || !file.type) {
    throw new UploadError('Invalid file data', 400)
  }

  if (!ALLOWED_TYPES.includes(file.type as AllowedMimeType)) {
    throw new UploadError('Invalid file type. Please upload a JPEG, PNG, or WebP image', 400)
  }

  if (file.data.length > MAX_FILE_SIZE) {
    throw new UploadError('File size exceeds 5MB limit', 400)
  }
}

async function deleteExistingAvatars(client: SupabaseClient<Database>, userId: string) {
  try {
    // List all files in the user's avatar directory
    const { data: files, error: listError } = await client.storage
      .from('avatar')
      .list(userId)

    if (listError) {
      console.error('Error listing files:', listError)
      return
    }

    if (files && files.length > 0) {
      // Delete all files in the directory
      const filesToDelete = files.map(file => `${userId}/${file.name}`)
      const { error: deleteError } = await client.storage
        .from('avatar')
        .remove(filesToDelete)

      if (deleteError) {
        console.error('Error deleting files:', deleteError)
      }
    }
  } catch (error) {
    console.error('Error in deleteExistingAvatars:', error)
  }
}

export default defineEventHandler(async (event: H3Event) => {
  try {
    const client = await serverSupabaseClient<Database>(event)
    const { data: { user } } = await client.auth.getUser()
    
    if (!user) {
      throw new UploadError('Unauthorized', 401)
    }

    const formData = await readMultipartFormData(event)
    if (!formData?.[0]) {
      throw new UploadError('No file provided', 400)
    }

    const file = formData[0]
    await validateUpload(file)

    // Delete existing avatar files
    await deleteExistingAvatars(client, user.id)

    const fileExt = file.filename!.split('.').pop()?.toLowerCase() || 'jpg'
    const timestamp = Date.now()
    const fileName = `${user.id}/avatar-${timestamp}.${fileExt}`

    // Upload to storage with cache control
    const { error: uploadError } = await client.storage
      .from('avatar')
      .upload(fileName, file.data, {
        upsert: true,
        contentType: file.type,
        cacheControl: 'no-cache'
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      throw new UploadError('Failed to upload file to storage')
    }

    // Get public URL without transform
    const { data: { publicUrl } } = client.storage
      .from('avatar')
      .getPublicUrl(fileName)

    // Update profile with the public URL
    const { error: updateError } = await client
      .from('profile')
      .update({ profile_img: publicUrl })
      .eq('supabase_user', user.id)
      .single()

    if (updateError) {
      console.error('Profile update error:', updateError)
      throw new UploadError('Failed to update profile with new avatar')
    }

    // Get updated profile
    const { data: profile, error: profileError } = await client
      .from('profile')
      .select()
      .eq('supabase_user', user.id)
      .single()

    if (profileError) {
      console.error('Profile fetch error:', profileError)
      throw new UploadError('Failed to fetch updated profile')
    }

    // Set cache control headers for the response
    setHeaders(event, {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    })

    return { 
      url: publicUrl,
      profile 
    }
  } catch (error) {
    if (error instanceof UploadError) {
      throw createError({
        statusCode: error.statusCode,
        message: error.message
      })
    }
    console.error('Server error:', error)
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Failed to upload file'
    })
  }
}) 