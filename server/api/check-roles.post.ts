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
    const { profileId } = body

    if (!profileId) {
      throw createError({
        statusCode: 400,
        message: 'Profile ID is required'
      })
    }

    // Check if the user has any roles in the profile_role table
    const { data: roles, error } = await supabase
      .from('profile_role')
      .select('role_id')
      .eq('profile_id', profileId)

    if (error) {
      console.error('Error checking roles:', error)
      throw createError({
        statusCode: 500,
        message: 'Failed to check roles'
      })
    }

    return {
      hasRoles: roles && roles.length > 0,
      roles: roles || []
    }
  } catch (error: any) {
    console.error('Error in check-roles:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 