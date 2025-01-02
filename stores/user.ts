import { defineStore } from 'pinia'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import type { User } from '@supabase/supabase-js'
import type { PostgrestError } from '@supabase/supabase-js'

// Database types
interface Tables {
  profile: UserProfile
}

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

interface UserRole {
  role_id: number
}

interface RoleCheckResponse {
  hasRoles: boolean
  roles: UserRole[]
}

// Store state type
interface UserState {
  user: User | null
  profile: UserProfile | null
  roles: UserRole[]
  loading: boolean
  error: string | null
}

// Profile update type
type ProfileUpdateData = Partial<Omit<UserProfile, 'id' | 'supabase_user'>>

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    profile: null,
    roles: [],
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state): boolean => !!state.user,
    hasRoles: (state): boolean => state.roles.length > 0,
    userName: (state): string => 
      state.user?.user_metadata?.full_name || 
      state.user?.user_metadata?.name || 
      'User',
    userAvatar: (state): string => 
      state.profile?.profile_img || 
      state.user?.user_metadata?.avatar_url || 
      state.user?.user_metadata?.picture || 
      'https://via.placeholder.com/32',
  },

  actions: {
    setUser(user: User | null): void {
      this.user = user
    },

    setProfile(profile: UserProfile | null): void {
      this.profile = profile
    },

    setRoles(roles: UserRole[]): void {
      this.roles = roles
    },

    setLoading(loading: boolean): void {
      this.loading = loading
    },

    setError(error: string | null): void {
      this.error = error
    },

    async fetchUserProfile(): Promise<void> {
      if (!this.user) return

      const supabase = useSupabaseClient()
      
      try {
        this.setLoading(true)
        this.setError(null)

        const { data: profile, error: profileError } = await supabase
          .from('profile')
          .select<string, UserProfile>('id, supabase_user, bio, profile_img, email, full_name, instagram_url, twitter_url, youtube_url')
          .eq('supabase_user', this.user.id)
          .limit(1)
          .maybeSingle()

        if (profileError) throw profileError
        
        this.setProfile(profile)

        if (profile) {
          try {
            const roleCheck = await $fetch<RoleCheckResponse>('/api/check-roles', {
              method: 'POST',
              body: {
                profileId: profile.id
              }
            })

            if (roleCheck?.roles) {
              this.setRoles(roleCheck.roles)
            }
          } catch (error) {
            console.error('Error fetching roles:', error)
          }
        }
      } catch (error) {
        this.setError(error instanceof Error ? error.message : 'An error occurred')
      } finally {
        this.setLoading(false)
      }
    },

    async updateProfile(profileData: ProfileUpdateData): Promise<UserProfile | void> {
      if (!this.user || !this.profile) return

      const supabase = useSupabaseClient()
      
      try {
        this.setLoading(true)
        this.setError(null)

        const { data: updatedProfile, error: updateError } = await (supabase
          .from('profile') as any)
          .update({
            bio: profileData.bio ?? null,
            profile_img: profileData.profile_img ?? null,
            email: profileData.email ?? this.profile.email,
            full_name: profileData.full_name ?? this.profile.full_name,
            instagram_url: profileData.instagram_url ?? null,
            twitter_url: profileData.twitter_url ?? null,
            youtube_url: profileData.youtube_url ?? null
          })
          .eq('id', this.profile.id)
          .select()
          .single()

        if (updateError) throw updateError
        
        this.setProfile(updatedProfile)
        return updatedProfile
      } catch (error) {
        const message = error instanceof Error ? error.message : 'An error occurred'
        this.setError(message)
        throw error
      } finally {
        this.setLoading(false)
      }
    },

    async signOut(): Promise<void> {
      const supabase = useSupabaseClient()
      
      try {
        await supabase.auth.signOut()
        this.clearStore()
      } catch (error) {
        const message = error instanceof Error ? error.message : 'An error occurred'
        this.setError(message)
      }
    },

    clearStore(): void {
      this.setUser(null)
      this.setProfile(null)
      this.setRoles([])
      this.setError(null)
      this.setLoading(false)
    }
  }
}) 