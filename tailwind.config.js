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
        giri: {
          navy: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          surface: 'rgb(var(--color-bg-surface) / <alpha-value>)',
          surface2: 'rgb(var(--color-bg-surface2) / <alpha-value>)',
          surface3: 'rgb(var(--color-bg-surface3) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
          'border-light': 'rgba(15, 23, 42, 0.08)',
          blue: '#2563EB',
          'blue-vivid': '#0066FF',
          cyan: '#06B6D4',
          'cyan-vivid': '#00D2FF',
          violet: '#8B5CF6',
          'violet-vivid': '#7928CA',
          magenta: '#A855F7',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          text: 'rgb(var(--color-text-primary) / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'glow-flow': 'glowFlow 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        glowFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
