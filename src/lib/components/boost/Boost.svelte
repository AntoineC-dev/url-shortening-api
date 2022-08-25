<script lang="ts">
  import { goto } from "$app/navigation";

  import Button from "$lib/shared/Button.svelte";
</script>

<section class="section space-y-6 text-center bg-secondary text-white py-20 bg-boost">
  <h2 class="h2 font-bold">Boost your links today</h2>
  <Button onClick={() => goto("/")} class="text-lg">Get Started</Button>
</section>
