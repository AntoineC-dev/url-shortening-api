<script lang="ts">
  import { menuItems } from "$lib/json";
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
      <a
        href="/"
        class="block rounded-3xl px-6 py-3 text-white bg-primary hover:opacity-70 transition-opacity duration-300"
      >
        Sign Up
      </a>
    </li>
  </ul>
</nav>
