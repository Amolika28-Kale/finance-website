export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0A2E8A",
        brandGold: "#F5A200",
        softGold: "#FFD27A",
      },
       fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    },
  },
  plugins: [],
};
