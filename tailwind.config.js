/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "h1 + *": {
              marginTop: "0",
            },
            "h2": {
              marginTop: "20px",
              marginBottom: "10px"
            },
            "ul + *": {
              marginTop: "0",
            },
            "ol + *": {
              marginTop: "0",
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
