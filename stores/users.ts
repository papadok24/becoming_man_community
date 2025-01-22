import { defineStore } from 'pinia'
import { useSupabaseClient } from '#imports'
import type { Database } from '~/types/supabase'

// Type the Supabase client
type TypedSupabaseClient = ReturnType<typeof useSupabaseClient<Database>>

// Database types with better type inference
type Tables = Database['public']['Tables']
type Profile = Tables['profile']['Row']
type Role = Tables['role']['Row']
type ProfileRole = Tables['profile_role']['Row']

// Strongly typed response interfaces
interface ProfileWithRoles extends Profile {
  profile_role: Array<ProfileRole & { role: Role }>
}

interface UsersState {
  users: ProfileWithRoles[]
  total: number
  currentPage: number
  pageSize: number
  loading: boolean
  error: string | null
}

// Composable for Supabase queries
const useSupabaseQueries = (supabase: TypedSupabaseClient) => {
  const fetchProfiles = async (offset: number, limit: number) => {
    return supabase
      .from('profile')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1)
      .order('id', { ascending: false })
  }

  const fetchRoles = async () => {
    return supabase
      .from('role')
      .select('*')
  }

  const fetchProfileRoles = async () => {
    return supabase
      .from('profile_role')
      .select('*')
  }

  return {
    fetchProfiles,
    fetchRoles,
    fetchProfileRoles
  }
}

export const useUsersStore = defineStore('users', {
  state: (): UsersState => ({
    users: [],
    total: 0,
    currentPage: 1,
    pageSize: 10,
    loading: false,
    error: null
  }),

  getters: {
    hasUsers: (state): boolean => state.users.length > 0,
    totalPages: (state): number => Math.ceil(state.total / state.pageSize),
    startIndex: (state): number => ((state.currentPage - 1) * state.pageSize) + 1,
    endIndex: (state): number => Math.min(state.currentPage * state.pageSize, state.total),
    // New getter for current pagination range
    paginationRange: (state): { offset: number; limit: number } => ({
      offset: (state.currentPage - 1) * state.pageSize,
      limit: state.pageSize
    })
  },

  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null

      try {
        const supabase = useSupabaseClient<Database>()
        const queries = useSupabaseQueries(supabase)
        const { offset, limit } = this.paginationRange

        // Fetch all data in parallel for better performance
        const [
          { data: profiles, error: profilesError, count },
          { data: roles, error: rolesError },
          { data: profileRoles, error: profileRolesError }
        ] = await Promise.all([
          queries.fetchProfiles(offset, limit),
          queries.fetchRoles(),
          queries.fetchProfileRoles()
        ])

        // Handle errors
        if (profilesError) throw new Error(profilesError.message)
        if (rolesError) throw new Error(rolesError.message)
        if (profileRolesError) throw new Error(profileRolesError.message)

        // Early return if no profiles
        if (!profiles?.length) {
          this.users = []
          this.total = count ?? 0
          return
        }

        // Create a roles lookup map for better performance
        const rolesMap = new Map(
          roles?.map((role: Role) => [role.id, role]) ?? []
        )

        // Transform the data
        this.users = profiles.map((profile: Profile): ProfileWithRoles => {
          const userProfileRoles = profileRoles
            ?.filter((pr: ProfileRole) => pr.profile_id === profile.id)
            ?.map((upr: ProfileRole) => ({
              ...upr,
              role: rolesMap.get(upr.role_id) ?? {
                id: upr.role_id,
                role_name: 'Unknown',
                created_at: new Date().toISOString()
              }
            })) ?? []

          return {
            ...profile,
            profile_role: userProfileRoles
          }
        })

        this.total = count ?? 0
      } catch (error) {
        console.error('Error fetching users:', error)
        
        this.error = error instanceof Error 
          ? error.message.includes('Permission denied')
            ? 'You do not have permission to view user data. Please contact an administrator.'
            : error.message
          : 'Failed to fetch users'
        
        this.users = []
        this.total = 0
      } finally {
        this.loading = false
      }
    },

    setPage(page: number) {
      if (page === this.currentPage) return
      this.currentPage = page
      this.fetchUsers()
    },

    setPageSize(size: number) {
      if (size === this.pageSize) return
      this.pageSize = size
      this.currentPage = 1 // Reset to first page when changing page size
      this.fetchUsers()
    },

    getRoleNames(profileRoles: ProfileWithRoles['profile_role']): string {
      return profileRoles
        .map(pr => pr.role.role_name)
        .filter(name => name !== 'Unknown')
        .join(', ') || 'No roles assigned'
    }
  }
}) 