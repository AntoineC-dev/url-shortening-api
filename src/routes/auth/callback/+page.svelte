<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { user } from "$lib/stores";
  import { getValueFromHash } from "$lib/utils";

  onMount(async () => {
    const accessToken = getValueFromHash(window.location.hash, "access_token");
    const refreshToken = getValueFromHash(window.location.hash, "refresh_token");
    const expiresIn = getValueFromHash(window.location.hash, "expires_in");
    if (!accessToken || !refreshToken) {
      goto("/");
      return;
    }
    const response = await fetch("/auth/session", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }),
      body: JSON.stringify({
        refreshToken,
        expiresIn,
      }),
    });
    if (response.ok) {
      const json = await response.json();
      $user = json.user;
    }
    goto("/");
  });
</script>

<main class="flex-1 grid place-content-center">
  <p class="text-2xl">Creating session...</p>
</main>
