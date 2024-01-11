/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          1: '#eaf0f7',
          2: '#f6faff',
        },
        dark: {
          1: '#0a1127',
          2: '#161c35',
        },
        "blight": {
          1: '#00000025',
          2: '#00000040',
        },
        "bdark": {
          1: '#ffffff25',
          2: '#ffffff45',
        }
      }
    },
  },
  plugins: [],
}
