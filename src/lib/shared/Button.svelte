<script lang="ts">
  export let size: "normal" | "dense" = "normal";
  export let type: "primary" | "secondary" = "primary";
  export let shape: "rounded" | "square" = "rounded";
  export let onClick: () => void;
  export let ariaLabel: string | null = null;
  export let disabled: boolean = false;
  let props: string | undefined = undefined;
  export { props as class };
</script>

<button
  class:bg-primary={type === "primary"}
  class:bg-secondary={type === "secondary"}
  class:rounded-3xl={shape === "rounded"}
  class:rounded-md={shape === "square"}
  class:py-3={size === "dense"}
  class:px-6={size === "dense"}
  class:py-4={size === "normal"}
  class:px-8={size === "normal"}
  on:click={onClick}
  aria-label={ariaLabel}
  {disabled}
  class="leading-none font-bold text-white hover:enabled:opacity-70 transition-opacity duration-300 {props}"
>
  <slot />
</button>
