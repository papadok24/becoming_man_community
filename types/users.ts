import type { Database } from './supabase'

// Database types with better type inference
type Tables = Database['public']['Tables']
type Profile = Tables['profile']['Row']
type Role = Tables['role']['Row']
type ProfileRole = Tables['profile_role']['Row']

// Extended types for the application
export interface ProfileWithRoles extends Profile {
  profile_role: Array<ProfileRole & { role: Role }>
}

export interface UserFilters {
  search?: string
  roleId?: number | null
  page: number
  pageSize: number
}

export interface PaginationState {
  total: number
  currentPage: number
  pageSize: number
  totalPages: number
  startIndex: number
  endIndex: number
}

export type { Role, Profile, ProfileRole } 