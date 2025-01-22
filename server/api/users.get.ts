import { createClient } from '@supabase/supabase-js'
import { H3Event } from 'h3'

interface UserProfile {
  id: number
  supabase_user: string
  bio: string | null
  profile_img: string | null
  email: string
  full_name: string
  instagram_url: string | null
  twitter_url: string | null
  youtube_url: string | null
}

interface Role {
  id: number
  role_name: string
}

interface ProfileRole {
  profile_id: number
  role_id: number
  assigned_at: string
  role: Role
}

interface ProfileWithRoles extends UserProfile {
  profile_role: ProfileRole[]
}

interface UsersResponse {
  users: ProfileWithRoles[]
  total: number
  page: number
  limit: number
}

interface DatabaseRole {
  id: number
  role_name: string
}

interface DatabaseProfileRole {
  profile_id: number
  role_id: number
  assigned_at: string
}

export default defineEventHandler(async (event: H3Event) => {
  console.log('API endpoint hit')
  
  try {
    // Initialize Supabase client
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Get query parameters for pagination
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 10
    const offset = (page - 1) * limit

    console.log('Querying with:', { page, limit, offset })

    // First, get profiles
    const { data: profiles, error: profilesError, count } = await supabase
      .from('profile')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1)
      .order('id', { ascending: false })

    console.log('Profiles query result:', { profiles, profilesError, count })

    if (profilesError) {
      console.error('Supabase error:', profilesError)
      throw createError({
        statusCode: 500,
        message: `Failed to fetch users: ${profilesError.message}`
      })
    }

    // Then, get all roles
    const { data: roles, error: rolesError } = await supabase
      .from('role')
      .select('*')

    console.log('Roles query result:', { roles, rolesError })

    if (rolesError) {
      console.error('Supabase error fetching roles:', rolesError)
      throw createError({
        statusCode: 500,
        message: `Failed to fetch roles: ${rolesError.message}`
      })
    }

    // Then get profile roles
    const { data: profileRoles, error: profileRolesError } = await supabase
      .from('profile_role')
      .select('*')

    console.log('Profile roles query result:', { profileRoles, profileRolesError })

    if (profileRolesError) {
      console.error('Supabase error fetching profile roles:', profileRolesError)
      throw createError({
        statusCode: 500,
        message: `Failed to fetch profile roles: ${profileRolesError.message}`
      })
    }

    // Combine the data
    if (profiles && profiles.length > 0) {
      const usersWithRoles: ProfileWithRoles[] = profiles.map(profile => {
        const userProfileRoles = profileRoles?.filter(pr => pr.profile_id === profile.id) || []
        const userRoles = userProfileRoles.map(upr => ({
          profile_id: upr.profile_id,
          role_id: upr.role_id,
          assigned_at: upr.assigned_at,
          role: roles?.find(r => r.id === upr.role_id) || { id: upr.role_id, role_name: 'Unknown' }
        }))

        return {
          ...profile,
          profile_role: userRoles
        }
      })

      console.log('Final combined data:', { 
        usersWithRoles, 
        profileCount: profiles.length,
        roleCount: roles?.length || 0,
        profileRolesCount: profileRoles?.length || 0
      })

      return {
        users: usersWithRoles,
        total: count || 0,
        page,
        limit
      } satisfies UsersResponse
    }

    console.log('No profiles found')

    return {
      users: [],
      total: count || 0,
      page,
      limit
    } satisfies UsersResponse
  } catch (error: any) {
    console.error('Server error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error',
      cause: error
    })
  }
}) 