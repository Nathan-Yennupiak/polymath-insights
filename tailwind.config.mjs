/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-brand": "#FF7B00",
        "primary-dark": "#1B181E",
        "primary-gray": "#d1d5db",
        "primary-bg": "#F0F0F0",
        "light-accent": "#83A3A9",
        "dark-accent": "#877068",
      },
    },
  },
  plugins: [],
};
