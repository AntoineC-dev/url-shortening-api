<script lang="ts">
  import { Button } from "$lib/shared";
  import { signInWithGithub } from "$lib/utils";

  let loading = false;

  const onLogin = async () => {
    try {
      loading = true;
      const { user, session, error } = await signInWithGithub();
      console.log("user", user);
      console.log("session", session);
      console.log("error", error);
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };
</script>

<main class="m-auto">
  {#if loading}
    <p>Loading...</p>
  {:else}
    <Button onClick={onLogin}>Login</Button>
  {/if}
</main>
