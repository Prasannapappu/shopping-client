/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryContent: "rgb(var(--primary-content) / <alpha-value>)",
        primaryStates: "rgb(var(--primary-states) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        secondaryContent: "rgb(var(--secondary-content) / <alpha-value>)",
        neutral: "rgb(var(--neutral) / <alpha-value>)",
        baseColor: "rgb(var(--baseColor) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
        disabled: "rgb(var(--disabled) / <alpha-value>)",
        container: "rgb(var(--container) / <alpha-value>)",
        transparent: "var(--transparent)",
      },
    },
  },
  plugins: [],
};
