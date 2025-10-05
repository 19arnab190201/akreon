module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-start": "#C95C26",
        "primary-mid": "#553628",
        "primary-end": "#171717",
        "accent-orange": "#FF7A2B",
        "accent-muted": "#BC7E50",
        "accent-light": "#FFB07A",
        "dark-bg": "#171717",
        "near-black": "#1E1A18",
        white: "#FFFFFF",
        "muted-white": "rgba(255,255,255,0.78)",
        "muted-light": "rgba(255,255,255,0.48)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255,122,43,0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(255,122,43,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
