import { writable } from "svelte/store";
import { UserRepo } from "$lib/repos";
import { supabaseClient } from "$lib/utils";

const userRepo = new UserRepo();

export const user = writable<App.UserStore>(false);

export const loginUser = () => userRepo.loginWithGithub();
export const logoutUser = () => userRepo.logout();

supabaseClient.auth.onAuthStateChange((_, session) => user.set(session?.user ? true : false));
