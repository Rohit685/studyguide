export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      stats: {
        Row: {
          id: number
          user_id: string
          question_name: string | null
          is_complete: boolean | false
          is_correct: boolean | false
          inserted_at: string
        }
        Insert: {
          id: number
          user_id: string
          question_name: string | null
          is_complete: boolean | false
          is_correct: boolean | false
          inserted_at: string
        }
        Update: {
          id: number
          user_id: string
          question_name: string | null
          is_complete: boolean | false
          is_correct: boolean | false
          inserted_at: string
        }
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
