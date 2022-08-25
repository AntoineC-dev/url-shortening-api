import { getSupabaseUser, supabase } from "$lib/utils";
import type { Auth } from "$types";
import { writable } from "svelte/store";

export const auth = writable<Auth>({ status: "SIGNED_OUT", user: getSupabaseUser() });
supabase.auth.onAuthStateChange((event) => auth.set({ status: event, user: getSupabaseUser() }));
