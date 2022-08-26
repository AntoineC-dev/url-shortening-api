<script lang="ts">
  import "../app.css";
  import type { LayoutServerData } from "./$types";
  import { user } from "$lib/stores";
  import { Footer, Header } from "$lib/components";

  export let data: LayoutServerData;

  $user = data.user;
</script>

<div id="app-container">
  <Header />
  <slot />
  <Footer />
</div>
