<script lang="ts">
  let open = false;
  const toggle = () => (open = !open);

  let top: HTMLElement;
  let middle: HTMLElement;
  let bottom: HTMLElement;
  $: translate = open ? 9 : 0; // gap + lineHeight
  $: rotate = open ? 45 : 0;
  $: opacity = open ? "0" : "1";
  $: top && (top.style.transform = `translateY(${translate}px) rotate(-${rotate}deg)`);
  $: middle && (middle.style.opacity = opacity);
  $: bottom && (bottom.style.transform = `translateY(-${translate}px) rotate(${rotate}deg)`);
</script>

<button
  id="mobile-menu-toggle"
  on:click={toggle}
  aria-label="{open ? 'Close' : 'Open'} mobile menu"
  aria-expanded={open}
  aria-controls="menu-items"
  class="flex flex-col justify-center items-center gap-[6px] p-1 -mx-1 text-neutral-200"
>
  <div bind:this={top} class="w-[26px] h-[3px] bg-current transition-transform duration-300 ease-in-out" />
  <div bind:this={middle} class="w-[26px] h-[3px] bg-current transition-opacity duration-300 ease-in-out" />
  <div bind:this={bottom} class="w-[26px] h-[3px] bg-current transition-transform duration-300 ease-in-out" />
</button>
