<script lang="ts">
  import "../app.css";
  import { Footer, Header } from "$lib/components";
</script>

<div id="app-container">
  <Header />
  <slot />
  <Footer />
</div>
