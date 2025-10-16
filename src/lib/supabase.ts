import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string;
          full_name: string;
          email: string | null;
          phone: string | null;
          address: string | null;
          id_number: string | null;
          id_type: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['clients']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['clients']['Insert']>;
      };
      transactions: {
        Row: {
          id: string;
          client_id: string | null;
          transaction_type: 'buy' | 'sell' | 'exchange';
          from_currency: string;
          to_currency: string;
          from_amount: number;
          to_amount: number;
          exchange_rate: number;
          commission: number;
          total_amount: number;
          status: 'pending' | 'completed' | 'cancelled';
          payment_method: string | null;
          reference_number: string;
          notes: string | null;
          created_at: string;
          completed_at: string | null;
        };
        Insert: Omit<Database['public']['Tables']['transactions']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['transactions']['Insert']>;
      };
      exchange_rates: {
        Row: {
          id: string;
          from_currency: string;
          to_currency: string;
          rate: number;
          buy_rate: number | null;
          sell_rate: number | null;
          effective_date: string;
          created_at: string;
          is_active: boolean;
        };
        Insert: Omit<Database['public']['Tables']['exchange_rates']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['exchange_rates']['Insert']>;
      };
      invoices: {
        Row: {
          id: string;
          transaction_id: string | null;
          client_id: string | null;
          invoice_number: string;
          invoice_date: string;
          due_date: string | null;
          subtotal: number;
          tax_amount: number;
          total_amount: number;
          status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
          notes: string | null;
          created_at: string;
          paid_at: string | null;
        };
        Insert: Omit<Database['public']['Tables']['invoices']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['invoices']['Insert']>;
      };
    };
  };
};
