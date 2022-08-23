<script lang="ts">
  import Logo from "$lib/assets/logo.svg";
  import DesktopMenu from "./DesktopMenu.svelte";
  import MobileMenu from "./MobileMenu.svelte";
</script>

<header class="section pt-6 sm:pt-8 lg:pt-12">
  <div class="container relative flex items-center">
    <a href="/" aria-label="Homepage" class="hover:opacity-70 transition-opacity duration-300">
      <Logo class="h-8 fill-neutral-400" />
    </a>
    <MobileMenu />
    <DesktopMenu />
  </div>
</header>
