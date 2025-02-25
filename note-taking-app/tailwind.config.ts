import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js", // Añade esta línea
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbitePlugin, // Añade el plugin
    function ({ addUtilities }) {
      addUtilities(
        {
          ".field-sizing-content": {
            "field-sizing": "content",
          },
          ".field-sizing-fixed": {
            "field-sizing": "fixed",
          },
        },
        ["responsive", "hover", "focus"]
      );
    },
  ],
} satisfies Config;
