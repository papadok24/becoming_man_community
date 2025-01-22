export interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
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
        Insert: Omit<Database['public']['Tables']['profile']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['profile']['Row']>
      }
      role: {
        Row: {
          id: number
          role_name: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['role']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['role']['Row']>
      }
      profile_role: {
        Row: {
          profile_id: number
          role_id: number
          assigned_at: string
        }
        Insert: Database['public']['Tables']['profile_role']['Row']
        Update: Partial<Database['public']['Tables']['profile_role']['Row']>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 