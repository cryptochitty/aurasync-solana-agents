/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        synth: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          dark: '#0F172A',
          glow: '#00F5FF'
        }
      }
    },
  },
  plugins: [],
}