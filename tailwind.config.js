/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'rgb(var(--color-brand-50) / <alpha-value>)',
          100: 'rgb(var(--color-brand-100) / <alpha-value>)',
          200: 'rgb(var(--color-brand-200) / <alpha-value>)',
          300: 'rgb(var(--color-brand-300) / <alpha-value>)',
          400: 'rgb(var(--color-brand-400) / <alpha-value>)',
          500: 'rgb(var(--color-brand-500) / <alpha-value>)',
          600: 'rgb(var(--color-brand-600) / <alpha-value>)',
          700: 'rgb(var(--color-brand-700) / <alpha-value>)',
          800: 'rgb(var(--color-brand-800) / <alpha-value>)',
          900: 'rgb(var(--color-brand-900) / <alpha-value>)',
          950: 'rgb(var(--color-brand-950) / <alpha-value>)',
        },
        surface: {
          light: 'rgb(var(--color-surface-light) / <alpha-value>)',
          dark: 'rgb(var(--color-surface-dark) / <alpha-value>)',
          subtle: {
            light: 'rgb(var(--color-surface-subtle-light) / <alpha-value>)',
            dark: 'rgb(var(--color-surface-subtle-dark) / <alpha-value>)',
          }
        },
        border: {
          light: 'rgb(var(--color-border-light) / <alpha-value>)',
          dark: 'rgb(var(--color-border-dark) / <alpha-value>)',
          glow: 'rgb(var(--color-border-glow) / <alpha-value>)',
        },
        text: {
          primary: {
            light: 'rgb(var(--color-text-primary-light) / <alpha-value>)',
            dark: 'rgb(var(--color-text-primary-dark) / <alpha-value>)',
          },
          secondary: {
            light: 'rgb(var(--color-text-secondary-light) / <alpha-value>)',
            dark: 'rgb(var(--color-text-secondary-dark) / <alpha-value>)',
          },
          muted: {
            light: 'rgb(var(--color-text-muted-light) / <alpha-value>)',
            dark: 'rgb(var(--color-text-muted-dark) / <alpha-value>)',
          }
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'apple-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'apple-dark': '0 8px 32px -4px rgba(0, 0, 0, 0.4), 0 4px 12px -2px rgba(0, 0, 0, 0.2)',
        'glow-sm': '0 0 15px -3px rgb(var(--color-brand-500) / 0.3)',
        'glow-md': '0 0 30px -5px rgb(var(--color-brand-500) / 0.4)',
        'glow-lg': '0 0 50px -10px rgb(var(--color-brand-500) / 0.5)',
        'glass': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Monaco', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { opacity: '0.4', transform: 'scale(0.98)' },
          '100%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
