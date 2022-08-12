/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        veryDarkBlue: "#202c37" /* Dark Mode Background */,
        darkBlue: "#2b3945" /* Dark Mode Elements */,
        white: "#ffffff" /* Dark Mode Text & Light Mode Elements */,

        veryLightGray: "#fafafa" /* Light Mode Background */,
        veryDarkBlue: "#111517" /* Light Mode Text */,
        darkGray: "	#858585" /* Light Mode Input */,
      },
    },
  },
  plugins: [],
};
