/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      primary: "#fffef9",
      "primary-2": "#B0403E",
    }),
    maxWidth: {
      xxs: "7rem",
      xxxs: "5rem",
      xxxxs: "2.75rem",
    },
    textColor: {
      "primary-2": "#004AAD",
      "primary-3": "#00C7FD",
      "primary-4": "#FF9900",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        league: ["League Spartan"],
        martel: ["Martel"],
      },
    },
    screens: {
      // note that some people use devices as small as 320px.
      sm: "375px",
      md: "412px",
      lg: "768px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
  },
  plugins: [],
};
