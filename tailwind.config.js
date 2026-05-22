/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Inter Display"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        ink: {
          DEFAULT: '#111111',
          soft: '#1d1d1f',
          mute: '#6e6e73',
          faint: '#86868b',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f5f5f7',
          subtle: '#fafafa',
        },
        accent: {
          sky: '#5ea2ff',
          violet: '#a78bfa',
          silver: '#c7c9cf',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        tight2: '-0.025em',
      },
      boxShadow: {
        glass: '0 1px 0 rgba(255,255,255,0.6) inset, 0 20px 60px -20px rgba(17,17,17,0.12)',
        soft: '0 30px 80px -40px rgba(17,17,17,0.18)',
        card: '0 1px 0 rgba(255,255,255,0.8) inset, 0 10px 30px -10px rgba(17,17,17,0.08), 0 1px 2px rgba(17,17,17,0.04)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(60% 60% at 20% 10%, rgba(167,139,250,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 80% 0%, rgba(94,162,255,0.18) 0%, transparent 60%), radial-gradient(40% 40% at 50% 100%, rgba(199,201,207,0.25) 0%, transparent 60%)',
        'grid-faint':
          'linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
