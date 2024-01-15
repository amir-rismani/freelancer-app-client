/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme"

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
        dark: withOpacity("--color-dark"),
        gray: withOpacity("--color-gray"),
        stroke: withOpacity("--color-stroke"),
        success: withOpacity("--color-green"),
        warning: withOpacity("--color-yellow"),
        error: withOpacity("--color-red"),
      },
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans]
      }
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: [],
}

