import { defineStore } from 'pinia'
import { useSupabaseClient } from '#imports'
import type { Database } from '~/types/supabase'
import type { ProfileWithRoles, UserFilters, PaginationState } from '~/types/users'

// Type the Supabase client
type TypedSupabaseClient = ReturnType<typeof useSupabaseClient<Database>>

// Strongly typed state interface
interface UsersState {
  users: ProfileWithRoles[]
  roles: Database['public']['Tables']['role']['Row'][]
  total: number
  currentPage: number
  pageSize: number
  filters: UserFilters
  loading: boolean
  error: string | null
}

// Composable for Supabase queries
const useSupabaseQueries = (supabase: TypedSupabaseClient) => {
  const fetchProfiles = async (filters: UserFilters) => {
    let query = supabase
      .from('profile')
      .select('*', { count: 'exact' })

    // Apply search filter
    if (filters.search) {
      query = query.or(`full_name.ilike.%${filters.search}%,email.ilike.%${filters.search}%`)
    }

    // Apply role filter
    if (filters.roleId) {
      const { data: profileIds } = await supabase
        .from('profile_role')
        .select('profile_id')
        .eq('role_id', filters.roleId)

      if (profileIds?.length) {
        query = query.in('id', profileIds.map(p => p.profile_id))
      } else {
        query = query.eq('id', -1) // No matches
      }
    }

    // Apply pagination
    const { page, pageSize } = filters
    const start = (page - 1) * pageSize
    const end = start + pageSize - 1

    return query
      .range(start, end)
      .order('id', { ascending: false })
  }

  const fetchRoles = async () => {
    return supabase
      .from('role')
      .select('*')
      .order('id')
  }

  const fetchProfileRoles = async () => {
    return supabase
      .from('profile_role')
      .select('*, role(*)')
  }

  const updateProfile = async (profile: Partial<ProfileWithRoles>) => {
    const { profile_role, ...profileData } = profile
    
    return supabase
      .from('profile')
      .update(profileData)
      .eq('id', profile.id)
      .select()
  }

  const updateProfileRoles = async (profileId: number, roleIds: number[]) => {
    // First delete all existing roles
    await supabase
      .from('profile_role')
      .delete()
      .eq('profile_id', profileId)

    // Then insert new roles
    if (roleIds.length) {
      return supabase
        .from('profile_role')
        .insert(
          roleIds.map(roleId => ({
            profile_id: profileId,
            role_id: roleId,
            assigned_at: new Date().toISOString()
          }))
        )
    }
  }

  const deleteProfile = async (profileId: number) => {
    // First delete profile roles
    await supabase
      .from('profile_role')
      .delete()
      .eq('profile_id', profileId)

    // Then delete profile
    return supabase
      .from('profile')
      .delete()
      .eq('id', profileId)
  }

  return {
    fetchProfiles,
    fetchRoles,
    fetchProfileRoles,
    updateProfile,
    updateProfileRoles,
    deleteProfile
  }
}

export const useUsersStore = defineStore('users', () => {
  // State
  const users = ref<ProfileWithRoles[]>([])
  const roles = ref<Database['public']['Tables']['role']['Row'][]>([])
  const total = ref<number>(0)
  const currentPage = ref<number>(1)
  const pageSize = ref<number>(10)
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const filters = ref<UserFilters>({
    search: '',
    roleId: null,
    page: 1,
    pageSize: 10
  })

  // Getters
  const hasUsers = computed((): boolean => users.value.length > 0)
  const calculatedTotalPages = computed((): number => 
    Math.max(1, Math.ceil(total.value / pageSize.value))
  )
  const calculatedStartIndex = computed((): number => 
    Math.max(1, ((currentPage.value - 1) * pageSize.value) + 1)
  )
  const calculatedEndIndex = computed((): number => 
    Math.min(currentPage.value * pageSize.value, total.value || 0)
  )

  // Actions
  async function initialize() {
    if (!roles.value.length) {
      const supabase = useSupabaseClient<Database>()
      const { data: rolesData } = await supabase
        .from('role')
        .select('*')
        .order('id')
      
      if (rolesData) {
        roles.value = rolesData
      }
    }
    
    await fetchUsers()
  }

  async function fetchUsers() {
    if (loading.value) return
    
    loading.value = true
    error.value = null

    try {
      const supabase = useSupabaseClient<Database>()
      const queries = useSupabaseQueries(supabase)

      const { data: profiles, error: profilesError, count } = await queries.fetchProfiles(filters.value)
      
      if (profilesError) throw new Error(profilesError.message)

      if (!profiles?.length) {
        users.value = []
        total.value = 0
        return
      }

      const { data: profileRoles, error: profileRolesError } = await queries.fetchProfileRoles()
      if (profileRolesError) throw new Error(profileRolesError.message)

      // Create a roles lookup map for better performance
      const rolesMap = new Map(roles.value.map(role => [role.id, role]))

      // Transform the data
      users.value = profiles.map((profile): ProfileWithRoles => {
        const userProfileRoles = profileRoles
          ?.filter(pr => pr.profile_id === profile.id)
          ?.map(upr => ({
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

      total.value = count ?? 0
    } catch (err) {
      error.value = err instanceof Error 
        ? err.message.includes('Permission denied')
          ? 'You do not have permission to view user data. Please contact an administrator.'
          : err.message
        : 'Failed to fetch users'
      
      users.value = []
      total.value = 0
    } finally {
      loading.value = false
    }
  }

  function setPage(page: number) {
    const newPage = Math.max(1, Math.min(page, calculatedTotalPages.value))
    if (newPage === currentPage.value) return
    filters.value.page = newPage
    currentPage.value = newPage
    fetchUsers()
  }

  function setPageSize(size: number) {
    const validSizes = [10, 25, 50]
    const newSize = validSizes.includes(size) ? size : 10
    if (newSize === pageSize.value) return
    filters.value.pageSize = newSize
    pageSize.value = newSize
    currentPage.value = 1
    fetchUsers()
  }

  function setSearch(query: string) {
    if (filters.value.search === query) return
    filters.value.search = query
    currentPage.value = 1
    fetchUsers()
  }

  function setRoleFilter(roleId: number | null) {
    if (filters.value.roleId === roleId) return
    filters.value.roleId = roleId
    currentPage.value = 1
    fetchUsers()
  }

  async function updateUser(user: ProfileWithRoles) {
    loading.value = true
    error.value = null

    try {
      const supabase = useSupabaseClient<Database>()
      const queries = useSupabaseQueries(supabase)

      await Promise.all([
        queries.updateProfile(user),
        queries.updateProfileRoles(
          user.id,
          user.profile_role.map(pr => pr.role_id)
        )
      ])

      await fetchUsers()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update user'
    } finally {
      loading.value = false
    }
  }

  async function deleteUser(userId: number) {
    loading.value = true
    error.value = null

    try {
      const supabase = useSupabaseClient<Database>()
      const queries = useSupabaseQueries(supabase)

      await queries.deleteProfile(userId)
      await fetchUsers()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to delete user'
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    users,
    roles,
    total,
    currentPage,
    pageSize,
    loading,
    error,
    filters,

    // Getters
    hasUsers,
    calculatedTotalPages,
    calculatedStartIndex,
    calculatedEndIndex,

    // Actions
    initialize,
    fetchUsers,
    setPage,
    setPageSize,
    setSearch,
    setRoleFilter,
    updateUser,
    deleteUser
  }
}) 