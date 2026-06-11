import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#4ECEDB',
          yellow: '#FFD96A',
          pink: '#F7A8B8',
          mint: '#A8E6CF',
          cream: '#FFFDF8',
          ink: '#2D2D2D',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['Fredoka', 'Nunito', 'sans-serif'],
        body: ['Nunito', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,0.08)',
        float: '0 18px 40px rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'hero-wash':
          'radial-gradient(circle at top left, rgba(78,206,219,0.35), transparent 38%), radial-gradient(circle at bottom right, rgba(247,168,184,0.3), transparent 36%), linear-gradient(135deg, #fffdf8 0%, #fff4e8 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
