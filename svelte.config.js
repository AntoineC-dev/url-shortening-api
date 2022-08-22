import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import svelteSVG from "vite-plugin-svelte-svg";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true,
  }),

  kit: {
    vite: {
      plugins: [
        svelteSVG({
          svgoConfig: {},
          requireSuffix: false,
        }),
      ],
    },
    adapter: adapter(),
  },
};

export default config;
