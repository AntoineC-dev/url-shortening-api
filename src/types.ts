import type { User as SupabaseUser } from "@supabase/supabase-js";

export type UserStore = SupabaseUser | null;
