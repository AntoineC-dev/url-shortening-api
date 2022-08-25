import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const loginWithGithub = () => supabase.auth.signIn({ provider: "github" });
export const logout = () => supabase.auth.signOut();
export const getSupabaseUser = () => supabase.auth.user();
export const getSupabaseSession = () => supabase.auth.session();
