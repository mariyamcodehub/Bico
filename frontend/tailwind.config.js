/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "body": {
            "background-color": "#FCF3CF",
            "border-color": "#F9E79F",
            "font-family": ['"Poppins"'],
          },
          ".bg-clr": {
            "background-color": "#EDBB99"
          },
          ".btn": {
            "background-color": " #FDD835 ",
            "color": "#006666",
            "border": "none"
          },

        },
      },
    ],
  },
}