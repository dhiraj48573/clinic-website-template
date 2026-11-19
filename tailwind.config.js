/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary, #0e7490)',
          'primary-dark': 'var(--color-primary-dark, #155e75)',
          'primary-light': 'var(--color-primary-light, #ecfeff)',
          secondary: 'var(--color-secondary, #0d9488)',
          accent: 'var(--color-accent, #10b981)',
          surface: 'var(--color-surface, #f8fafc)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(14, 116, 144, 0.08)',
      }
    },
  },
  plugins: [],
}
