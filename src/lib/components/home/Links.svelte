<script lang="ts">
  import { later } from "$lib/helpers";
  import Button from "$lib/shared/Button.svelte";

  let input: HTMLInputElement;
  let value = "";
  let state: "idle" | "active" | "submitting" | Error = "idle";

  const resetForm = () => {
    state = "idle";
    value = "";
  };

  const validateUrl = (value: string, force?: "force") => {
    if ((state === "idle" && !force) || state === "submitting") return;
    if (state !== "active") state = "active";
    const trimmed = value.trim();
    if (trimmed.length > 0) return;
    state = new Error("Please add a link");
  };
  $: validateUrl(value);

  const onClick = async () => {
    if (state === "idle") validateUrl(value, "force");
    if (state instanceof Error) return input.focus();
    state = "submitting";
    try {
      await later(3000);
    } catch (error) {
      state = new Error("Error fetching");
    }
    resetForm();
  };
</script>

<div
  class="flex flex-col bg-secondary p-6 sm:p-8 md:px-10 lg:py-10 lg:px-12 gap-4 rounded-lg sm:flex-row shadow-sm bg-shorten"
>
  <div class="flex flex-col gap-1 sm:flex-1">
    <input
      type="text"
      bind:this={input}
      bind:value
      placeholder="Shorten a link here..."
      data-invalid={state instanceof Error}
      class="p-3 rounded-md bg-white placeholder:text-neutral-100"
    />
    {#if state instanceof Error}
      <span class="text-error text-xs">{state.message}</span>
    {/if}
  </div>
  <Button {onClick} disabled={state instanceof Error || state === "submitting"} shape="square">
    {state === "submitting" ? "Please wait..." : "Shorten It!"}
  </Button>
</div>
