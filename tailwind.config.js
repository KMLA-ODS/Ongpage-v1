/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    screens: {
      xs: "365px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },

    fontFamily: {
      primary: "var(--font-pretendard)",
    },
    extend: {
      colors: {
        primary: "#00C3FF",
        secondary: "#5CA45E",
        accent: {
          DEFAULT: "#000000",
          hover: '"#00C3FF"',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "custom-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
