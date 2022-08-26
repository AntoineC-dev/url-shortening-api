import { loginWithGithub } from "$lib/utils";
import { writable } from "svelte/store";

export const user = writable<App.UserStore>(null);

export const loginUser = () => loginWithGithub();

export const createSession = async (props: { accessToken: string; refreshToken: string; expiresIn: string }) => {
  const response = await fetch("/auth", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${props.accessToken}`,
    }),
    body: JSON.stringify({
      refreshToken: props.refreshToken,
      expiresIn: props.expiresIn,
    }),
  });
  if (response.ok) {
    const json = await response.json();
    user.set(json.user);
  }
};

export const logoutUser = async () => {
  const response = await fetch("/auth", { method: "DELETE" });
  if (response.ok) {
    user.set(null);
  }
};
