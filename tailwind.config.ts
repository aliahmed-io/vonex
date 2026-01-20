
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            // Using standard fonts, but designed to look premium with tracking/uppercase
            sans: ['var(--font-inter)', 'sans-serif'],
            mono: ['var(--font-roboto-mono)', 'monospace'],
          },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)'},
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Add a marquee animation
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards', // Slightly smoother easing
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
