import { sveltekit } from "@sveltejs/kit/vite";
import svelteKitSVG from "@poppanator/sveltekit-svg";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    svelteKitSVG({
      svgoOptions: {
        plugins: [
          {
            name: "preset-default",
            params: { overrides: { removeViewBox: false } },
          },
          { name: "removeAttrs", params: { attrs: "(fill|stroke)" } },
          "removeDimensions",
        ],
      },
    }),
  ],
};

export default config;
