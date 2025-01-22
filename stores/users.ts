import { defineStore } from 'pinia'

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
  created_at: string
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

interface UsersState {
  users: ProfileWithRoles[]
  total: number
  currentPage: number
  pageSize: number
  loading: boolean
  error: string | null
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
    hasUsers: (state) => state.users.length > 0,
    totalPages: (state) => Math.ceil(state.total / state.pageSize),
    startIndex: (state) => ((state.currentPage - 1) * state.pageSize) + 1,
    endIndex: (state) => Math.min(state.currentPage * state.pageSize, state.total)
  },

  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null

      try {
        // Only log on client side or in development
        if (!process.server || process.dev) {
          console.log('Starting users fetch...')
        }
        
        const response = await $fetch<{ users: ProfileWithRoles[], total: number }>('/api/users', {
          params: {
            page: this.currentPage,
            limit: this.pageSize
          },
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        // Only log on client side or in development
        if (!process.server || process.dev) {
          console.log('Users API Response:', response)
        }

        if (response) {
          this.users = response.users
          this.total = response.total
        } else {
          // Only log on client side or in development
          if (!process.server || process.dev) {
            console.warn('No data returned from users API')
          }
          this.users = []
          this.total = 0
        }
      } catch (e: any) {
        // Only log on client side or in development
        if (!process.server || process.dev) {
          console.error('Error fetching users:', e)
        }
        
        // Handle specific error cases
        if (e?.message?.includes('Permission denied')) {
          this.error = 'You do not have permission to view user data. Please contact an administrator.'
        } else {
          this.error = e.message || 'Failed to fetch users'
        }
        
        this.users = []
        this.total = 0
      } finally {
        this.loading = false
        // Only log on client side or in development
        if (!process.server || process.dev) {
          console.log('Current users state:', { 
            users: this.users, 
            total: this.total,
            loading: this.loading,
            error: this.error 
          })
        }
      }
    },

    setPage(page: number) {
      this.currentPage = page
      this.fetchUsers()
    },

    setPageSize(size: number) {
      this.pageSize = size
      this.currentPage = 1 // Reset to first page when changing page size
      this.fetchUsers()
    },

    getRoleNames(profileRoles: ProfileRole[]): string {
      return profileRoles.map(pr => pr.role.role_name).join(', ')
    }
  }
}) 