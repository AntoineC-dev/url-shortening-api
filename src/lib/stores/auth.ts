import { getSupabaseUser, supabase } from "$lib/utils";
import { writable } from "svelte/store";

export const auth = writable<App.Auth>({ status: "SIGNED_OUT", user: getSupabaseUser() });
supabase.auth.onAuthStateChange((event) => auth.set({ status: event, user: getSupabaseUser() }));
