/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      text100per: '180%',
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        textloop: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-100%, 0, 0)" },
        },
      },
      animation: {
        textloop: "textloop 8s linear infinite",
      },
      height: {
        '3vh': 'calc(var(--vh, 1vh) * 300);',
        '2.5vh': 'calc(var(--vh, 1vh) * 250);',
        '4vh': 'calc(var(--vh, 1vh) * 420);',
      }
    },
  },
  plugins: [],
};
