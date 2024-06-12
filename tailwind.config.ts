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
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F5F5F5',
      'darkWhite': '#e5e5e5',
      'black': '#333738',
      'lightBg': '#7091E6',
      'darkBg': '#3D52A0',
      'darkPrimary': '#8697C4',
      'lightPrimary': '#becbed',
      'accent': '#EDE8F5',
      'link': '#2563EB',
      'buttonCorrect': '#65A30D',
      'buttonWrong': '#EF4444',
      'buttonNeutral': '#D4D4D4'
    }
  },
  plugins: [],
};
export default config;
