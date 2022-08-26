// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface User {
    id: string;
  }

  type UserStore = User | null;

  interface UserRepoInterface {
    findByAccessToken(accessToken: string): Promise<User | null>;
    refreshSession(refreshToken: string): Promise<{
      user: User | null;
      sessionCookie: string;
      refreshCookie: string;
    }>;
  }

  interface Locals {
    userRepo: UserRepoInterface;
    user: User | null;
  }
  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
}

declare module "$lib/assets/*.svg" {
  import type { SvelteComponentDev } from "svelte";
  const content: SvelteComponentDev;
  export default content;
}
