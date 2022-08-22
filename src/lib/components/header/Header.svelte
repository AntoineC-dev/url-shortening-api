<script lang="ts">
  import Logo from "$lib/assets/logo.svg";
  import MobileMenu from "./MobileMenu.svelte";
</script>

<header class="container relative flex items-center justify-between py-2">
  <a href="/" aria-label="Homepage">
    <Logo class="h-8 fill-neutral-400" />
  </a>
  <MobileMenu />
</header>
