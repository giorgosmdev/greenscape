// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Update site URL before deployment
  site: "https://giorgosmdev.github.io",
  base: "Greenscape",
  integrations: [
    {
      name: "dev-only-pages",
      hooks: {
        "astro:config:setup": ({ command, injectRoute }) => {
          if (command === "dev") {
            injectRoute({
              pattern: "/styleguide",
              entrypoint: "./src/dev/styleguide.astro",
            });
          }
        },
      },
    },
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Lora",
      cssVariable: "--font-family-lora",
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Lora-Variable.woff2"],
            weight: "400 700",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Lora-VariableItalic.woff2"],
            weight: "400 700",
            style: "italic",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Metropolis",
      cssVariable: "--font-family-metropolis",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Metropolis-Regular.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Metropolis-SemiBold.woff2"],
            weight: "600",
            style: "normal",
          },
        ],
      },
    },
  ],
});
