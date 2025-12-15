/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette mapped to requested colors
        brand: {
          50: '#F8FAFC', // Lightest background
          100: '#E0E7EF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#60A5FA',
          500: '#2563EB', // Primary blue
          600: '#1E40AF',
          700: '#1E293B', // Slate dark for text
        },
        accent: '#FACC15', // Gold
        background: '#F8FAFC',
        text: '#1E293B',
        muted: '#475569',
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',
        info: '#3B82F6',
      }
    }
  },
  plugins: []
}
