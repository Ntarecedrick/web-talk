import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "wt-darkgray": {
          50:"#253850",
          100: "#151f2d",
          300: "#182533",
          500: "#1f5da8",
          700: "#266bc4",
        },
        "wt-green":{
          500:"#35b344"
        }
      },
      backgroundColor: {
        "wt-darkgray": {
          50:"#253850",
          100: "#151f2d",
          300: "#182533",
          500: "#1f5da8",
          700: "#266bc4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
