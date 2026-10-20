/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          offwhite: "#F5F4F0",
          charcoal: "#262626",
          gray: "#777777",
          lightgray: "#E8E7E3",
          accent: "#8B8A7B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans)", "sans-serif"],
        serif: ["var(--font-noto-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
