/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#2B2C35',
        blue: {
          100: '#240064',
          200: '#5a00f0',
        }

      },
      container: {
        center: true,
        padding: "1.5rem",
    }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]
}

