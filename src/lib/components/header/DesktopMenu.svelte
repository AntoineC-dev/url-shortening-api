<script lang="ts">
  import { menuItems } from "$lib/json";
  import { auth } from "$lib/stores";
  import { loginWithGithub, logout } from "$lib/utils";

  const handleLogin = async () => {
    try {
      const { error } = await loginWithGithub();
      if (error) alert(error.message);
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await logout();
      if (error) alert(error.message);
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };
</script>

<nav aria-label="Primary" class="hidden md:flex flex-1 justify-between ml-12">
  <ul class="w-full flex items-center gap-4 text-neutral-200 font-bold">
    {#each menuItems as { href, label } (label)}
      <li><a {href} class="p-2 hover:text-neutral-300 transition-colors duration-300">{label}</a></li>
    {/each}
    {#if $auth.status === "SIGNED_IN"}
      <li class="ml-auto">
        <button on:click={handleLogout} class="btn-sm btn-text">Logout</button>
      </li>
    {:else}
      <li class="ml-auto">
        <button on:click={handleLogin} class="btn-sm btn-text">Login</button>
      </li>
      <li>
        <button on:click={handleLogin} class="btn-sm btn-primary">Sign Up</button>
      </li>
    {/if}
  </ul>
</nav>
