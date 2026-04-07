/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
     
      colors: {
        primary: "#a855f7", // purple
        secondary: "#7e22ce",
        dark: "#000000",
        light: "#ffffff",
        muted: "#9ca3af",
      },

     
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      
      spacing: {
        section: "120px", 
        container: "48px", 
      },

      
      fontSize: {
        hero: "60px",
        heading: "48px",
        subheading: "20px",
      },

      
      letterSpacing: {
        wideX: "0.25em",
        ultra: "0.35em",
      },

      
      boxShadow: {
        glow: "0 0 20px rgba(168,85,247,0.6)",
      },
    },
  },

  plugins: [],
};
