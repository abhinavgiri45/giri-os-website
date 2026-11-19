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
          navy: '#060913',
          surface: '#0B0F19',
          surface2: '#111827',
          surface3: '#1F2937',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(0, 0, 0, 0.08)',
          blue: '#2563EB',
          'blue-vivid': '#0066FF',
          cyan: '#06B6D4',
          'cyan-vivid': '#00D2FF',
          violet: '#8B5CF6',
          'violet-vivid': '#7928CA',
          magenta: '#A855F7',
          muted: '#94A3B8',
          text: '#F8FAFC'
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
