// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontSize: {
        "home-heading-small": "var(--text-home-heading-small)",
        "home-heading-large": "var(--text-home-heading-large)",
      },
    },
  },
};
