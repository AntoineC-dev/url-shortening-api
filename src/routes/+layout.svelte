<script lang="ts">
  import Footer from "$lib/components/footer/Footer.svelte";
  import Header from "$lib/components/header/Header.svelte";
  import "../app.css";
</script>

<div id="app-container">
  <Header />
  <slot />
  <Footer />
</div>
