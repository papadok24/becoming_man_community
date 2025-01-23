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
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profile']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profile']['Insert']>
      }
      role: {
        Row: {
          id: number
          role_name: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['role']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['role']['Insert']>
      }
      profile_role: {
        Row: {
          profile_id: number
          role_id: number
          assigned_at: string
          role?: Database['public']['Tables']['role']['Row']
        }
        Insert: Omit<Database['public']['Tables']['profile_role']['Row'], 'assigned_at'>
        Update: Partial<Database['public']['Tables']['profile_role']['Insert']>
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