import { supabaseClient } from "$lib/utils";

export class UserRepo implements App.UserRepoInterface {
  loginWithGithub = async () => {
    const { session } = await supabaseClient.auth.signIn({ provider: "github" });
    return session?.user || null;
  };

  getUser = () => supabaseClient.auth.user();

  logout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    return error;
  };
}
