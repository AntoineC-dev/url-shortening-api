<script lang="ts">
  import Logo from "$lib/assets/logo.svg";
  import DesktopMenu from "./DesktopMenu.svelte";
  import MobileMenu from "./MobileMenu.svelte";
</script>

<header class="container relative flex items-center">
  <a href="/" aria-label="Homepage">
    <Logo class="h-8 fill-neutral-400" />
  </a>
  <MobileMenu />
  <DesktopMenu />
</header>
