<script lang="ts">
  import { goto } from "$app/navigation";
  import { menuItems } from "$lib/json";
  import Button from "$lib/shared/Button.svelte";
</script>

<nav aria-label="Primary" class="hidden md:flex flex-1 justify-between ml-12">
  <ul class="w-full flex items-center gap-4 text-neutral-200 font-bold">
    {#each menuItems as { href, label } (label)}
      <li><a {href} class="p-2 hover:text-neutral-300 transition-colors duration-300">{label}</a></li>
    {/each}
    <li class="ml-auto">
      <a href="/" class="rounded-3xl p-2 hover:text-neutral-300 transition-colors duration-300">Login</a>
    </li>
    <li>
      <Button onClick={() => goto("/")} size="dense">Sign Up</Button>
      <!-- <a
        href="/"
        class="block leading-none rounded-3xl px-6 py-4 text-white bg-primary hover:opacity-70 transition-opacity duration-300"
      >
        Sign Up
      </a> -->
    </li>
  </ul>
</nav>
