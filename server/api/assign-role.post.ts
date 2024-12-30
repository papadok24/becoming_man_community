import { createClient } from '@supabase/supabase-js'
import { H3Event } from 'h3'

// Initialize Supabase client with service role
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    const { profileId, roleId } = body

    if (!profileId || !roleId) {
      throw createError({
        statusCode: 400,
        message: 'Profile ID and Role ID are required'
      })
    }

    // Insert role assignment
    const { error: insertError } = await supabase
      .from('profile_role')
      .insert({
        profile_id: profileId,
        role_id: roleId,
        assigned_at: new Date().toISOString()
      })

    if (insertError) {
      throw createError({
        statusCode: 500,
        message: 'Failed to assign role'
      })
    }

    return {
      success: true
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 