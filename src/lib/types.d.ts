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
      UserQuestionTable: {
        Row: {
          created_at: string
          id: string
          question_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          question_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          question_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "UserQuestionTable_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "Questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserQuestionTable_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
