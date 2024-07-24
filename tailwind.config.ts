import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      inter: ['var(--font-inter)'],
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'lime': {
        300: '#BEF264',
        400: '#9AC155',
        950: '#1A2E05'
      },
      'zinc': {
        50: '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        700: '#27272A',
        800: '#27272A',
        900: '#18181B',
        950: '#09090B'
      }
    },
    backgroundImage: {
      pattern: 'url(/bg.png)'
    }
  },
  plugins: [],
};
export default config;
