/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#fff5fa",
          100: "#ffe4f1",
          200: "#ffd0e5",
          300: "#ffb3d4",
          400: "#ff8fbf",
          500: "#f76ba0",
          600: "#e84a86",
          700: "#c92d6c",
          800: "#a01e54",
          900: "#7a173f",
        },
        lavender: {
          50: "#f8f5ff",
          100: "#efe9ff",
          200: "#e0d4ff",
          300: "#cab6ff",
          400: "#b08fff",
          500: "#9366f7",
          600: "#7c46e8",
          700: "#6938cc",
          800: "#552da3",
          900: "#432680",
        },
        ink: {
          50: "#f7f6fa",
          100: "#eeeaf3",
          200: "#dcd5e6",
          300: "#bcb1cc",
          400: "#8e7fa3",
          500: "#6a5d80",
          600: "#514764",
          700: "#3c3450",
          800: "#27213a",
          900: "#161126",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(147, 102, 247, 0.18)",
        card: "0 8px 30px -10px rgba(247, 107, 160, 0.15)",
        glow: "0 0 0 4px rgba(238, 234, 243, 0.6)",
      },
      backgroundImage: {
        "pink-lavender": "linear-gradient(135deg, #ffe4f1 0%, #efe9ff 100%)",
        "pink-lavender-soft": "linear-gradient(135deg, #fff5fa 0%, #f8f5ff 100%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatySlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(6deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        floatySlow: "floatySlow 9s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};
