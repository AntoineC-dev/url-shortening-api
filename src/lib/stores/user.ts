import { loginWithGithub } from "$lib/utils";
import { writable } from "svelte/store";

export const user = writable<App.UserStore>(null);

export const loginUser = async () => {
  const redirectTo = `${window.location.protocol}//${window.location.host}/auth/callback`;
  await loginWithGithub(redirectTo);
};

export const logoutUser = async () => {
  const response = await fetch("/auth/session", { method: "DELETE" });
  if (response.ok) {
    user.set(null);
  }
};
