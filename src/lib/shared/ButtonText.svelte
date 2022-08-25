<script lang="ts">
  export let size: "normal" | "dense" = "normal";
  export let onClick: () => void;
  export let ariaLabel: string | null = null;
  export let disabled: boolean = false;
  let props: string | undefined = undefined;
  export { props as class };
</script>

<button
  class:py-3={size === "dense"}
  class:px-6={size === "dense"}
  class:py-4={size === "normal"}
  class:px-8={size === "normal"}
  on:click={onClick}
  aria-label={ariaLabel}
  {disabled}
  class="leading-none font-bold text-neutral-200 hover:enabled:text-neutral-300 transition-colors duration-300 whitespace-nowrap disabled:cursor-not-allowed {props}"
>
  <slot />
</button>
