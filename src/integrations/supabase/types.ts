export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      call_transcripts: {
        Row: {
          created_at: string
          duration_seconds: number | null
          file_name: string
          file_url: string | null
          id: string
          key_points: string[] | null
          sentiment: Database["public"]["Enums"]["sentiment_score"] | null
          summary: string | null
          transcript_text: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          file_name: string
          file_url?: string | null
          id?: string
          key_points?: string[] | null
          sentiment?: Database["public"]["Enums"]["sentiment_score"] | null
          summary?: string | null
          transcript_text: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          file_name?: string
          file_url?: string | null
          id?: string
          key_points?: string[] | null
          sentiment?: Database["public"]["Enums"]["sentiment_score"] | null
          summary?: string | null
          transcript_text?: string
          user_id?: string
        }
        Relationships: []
      }
      candidates: {
        Row: {
          created_at: string
          email: string | null
          experience_years: number | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          position: string
          ranking_explanation: string | null
          resume_id: string | null
          score: number | null
          skills: string[] | null
          status: Database["public"]["Enums"]["candidate_status"] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          experience_years?: number | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          position: string
          ranking_explanation?: string | null
          resume_id?: string | null
          score?: number | null
          skills?: string[] | null
          status?: Database["public"]["Enums"]["candidate_status"] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          experience_years?: number | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          position?: string
          ranking_explanation?: string | null
          resume_id?: string | null
          score?: number | null
          skills?: string[] | null
          status?: Database["public"]["Enums"]["candidate_status"] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "candidates_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          audio_url: string | null
          context_data: Json | null
          created_at: string
          id: string
          response_audio_url: string | null
          response_text: string
          transcript: string
          user_id: string
        }
        Insert: {
          audio_url?: string | null
          context_data?: Json | null
          created_at?: string
          id?: string
          response_audio_url?: string | null
          response_text: string
          transcript: string
          user_id: string
        }
        Update: {
          audio_url?: string | null
          context_data?: Json | null
          created_at?: string
          id?: string
          response_audio_url?: string | null
          response_text?: string
          transcript?: string
          user_id?: string
        }
        Relationships: []
      }
      insights: {
        Row: {
          confidence_score: number | null
          created_at: string
          data_sources: Json | null
          generated_insight: string
          id: string
          insight_type: string
          query: string
          user_id: string
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string
          data_sources?: Json | null
          generated_insight: string
          id?: string
          insight_type: string
          query: string
          user_id: string
        }
        Update: {
          confidence_score?: number | null
          created_at?: string
          data_sources?: Json | null
          generated_insight?: string
          id?: string
          insight_type?: string
          query?: string
          user_id?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          created_at: string
          due_date: string | null
          extracted_data: Json | null
          file_name: string
          file_url: string
          gst_amount: number | null
          gst_mismatch_detected: boolean | null
          id: string
          invoice_date: string | null
          invoice_number: string
          mismatch_details: string | null
          status: Database["public"]["Enums"]["invoice_status"] | null
          total_amount: number | null
          updated_at: string
          user_id: string
          vendor_name: string | null
        }
        Insert: {
          created_at?: string
          due_date?: string | null
          extracted_data?: Json | null
          file_name: string
          file_url: string
          gst_amount?: number | null
          gst_mismatch_detected?: boolean | null
          id?: string
          invoice_date?: string | null
          invoice_number: string
          mismatch_details?: string | null
          status?: Database["public"]["Enums"]["invoice_status"] | null
          total_amount?: number | null
          updated_at?: string
          user_id: string
          vendor_name?: string | null
        }
        Update: {
          created_at?: string
          due_date?: string | null
          extracted_data?: Json | null
          file_name?: string
          file_url?: string
          gst_amount?: number | null
          gst_mismatch_detected?: boolean | null
          id?: string
          invoice_date?: string | null
          invoice_number?: string
          mismatch_details?: string | null
          status?: Database["public"]["Enums"]["invoice_status"] | null
          total_amount?: number | null
          updated_at?: string
          user_id?: string
          vendor_name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_name: string | null
          created_at: string
          department: string | null
          id: string
          role: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          company_name?: string | null
          created_at?: string
          department?: string | null
          id?: string
          role?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          company_name?: string | null
          created_at?: string
          department?: string | null
          id?: string
          role?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      resumes: {
        Row: {
          created_at: string
          embedding_vector: string | null
          file_name: string
          file_url: string
          id: string
          parsed_data: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string
          embedding_vector?: string | null
          file_name: string
          file_url: string
          id?: string
          parsed_data?: Json | null
          user_id: string
        }
        Update: {
          created_at?: string
          embedding_vector?: string | null
          file_name?: string
          file_url?: string
          id?: string
          parsed_data?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      tickets: {
        Row: {
          assigned_to: string | null
          call_transcript_id: string | null
          category: string | null
          created_at: string
          customer_email: string | null
          customer_name: string | null
          description: string | null
          id: string
          priority: Database["public"]["Enums"]["ticket_priority"] | null
          resolution_notes: string | null
          status: Database["public"]["Enums"]["ticket_status"] | null
          subject: string
          ticket_number: string
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_to?: string | null
          call_transcript_id?: string | null
          category?: string | null
          created_at?: string
          customer_email?: string | null
          customer_name?: string | null
          description?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"] | null
          resolution_notes?: string | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
          subject: string
          ticket_number: string
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_to?: string | null
          call_transcript_id?: string | null
          category?: string | null
          created_at?: string
          customer_email?: string | null
          customer_name?: string | null
          description?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"] | null
          resolution_notes?: string | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
          subject?: string
          ticket_number?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tickets_call_transcript_id_fkey"
            columns: ["call_transcript_id"]
            isOneToOne: false
            referencedRelation: "call_transcripts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      _ensure_manage_policies: {
        Args: { _table: unknown }
        Returns: undefined
      }
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      candidate_status:
        | "pending"
        | "shortlisted"
        | "interviewed"
        | "hired"
        | "rejected"
      invoice_status: "pending" | "approved" | "rejected" | "paid"
      sentiment_score: "positive" | "neutral" | "negative"
      ticket_priority: "low" | "medium" | "high" | "urgent"
      ticket_status: "open" | "in_progress" | "resolved" | "closed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      candidate_status: [
        "pending",
        "shortlisted",
        "interviewed",
        "hired",
        "rejected",
      ],
      invoice_status: ["pending", "approved", "rejected", "paid"],
      sentiment_score: ["positive", "neutral", "negative"],
      ticket_priority: ["low", "medium", "high", "urgent"],
      ticket_status: ["open", "in_progress", "resolved", "closed"],
    },
  },
} as const
