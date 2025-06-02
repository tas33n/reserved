import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'drip': 'drip 2s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'scan': 'scan 3s linear infinite',
        'glitch': 'glitch 3s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          },
        },
        'drip': {
          '0%, 100%': {
            transform: 'scaleY(0)',
            opacity: '0'
          },
          '50%': {
            transform: 'scaleY(1)',
            opacity: '1'
          },
        },
        'pulse': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          },
        },
        'blink': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          },
        },
      },
      colors: {
        'terminal-green': '#00ff00',
        'terminal-dark': '#001100',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            50: "#e6fff2",
            100: "#ccffe6",
            200: "#99ffcc",
            300: "#66ffb3",
            400: "#33ff99",
            500: "#00ff80",
            600: "#00cc66",
            700: "#00994d",
            800: "#006633",
            900: "#00331a",
            DEFAULT: "#00ff80",
            foreground: "#000000"
          },
        }
      },
      dark: {
        colors: {
          primary: {
            50: "#00331a",
            100: "#006633",
            200: "#00994d",
            300: "#00cc66",
            400: "#00ff80",
            500: "#33ff99",
            600: "#66ffb3",
            700: "#99ffcc",
            800: "#ccffe6",
            900: "#e6fff2",
            DEFAULT: "#00ff80",
            foreground: "#000000"
          },
        }
      }
    }
  })]
};