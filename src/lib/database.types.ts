export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Questions: {
        Row: {
          gfg_link: string | null
          id: string
          lc_link: string | null
          title: string
          type: string
        }
        Insert: {
          gfg_link?: string | null
          id?: string
          lc_link?: string | null
          title: string
          type: string
        }
        Update: {
          gfg_link?: string | null
          id?: string
          lc_link?: string | null
          title?: string
          type?: string
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
