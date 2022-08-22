<script lang="ts">
  import Header from "$lib/components/header/Header.svelte";
  import "../app.css";
</script>

<div id="app-container">
  <Header />
  <slot />
</div>
