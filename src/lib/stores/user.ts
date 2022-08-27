import { writable } from "svelte/store";
import { UserRepo } from "$lib/repos";
import { supabaseClient } from "$lib/utils";
import type { UserStore } from "$types";

const userRepo = new UserRepo();

export const user = writable<UserStore>(null);

export const loginUser = () => userRepo.loginWithGithub();
export const logoutUser = () => userRepo.logout();

supabaseClient.auth.onAuthStateChange((_, session) => user.set(session?.user || null));
