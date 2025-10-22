/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom sophisticated palette
        noir: '#03110D',        // Almost black - primary background
        teal: '#16302B',        // Dark teal - secondary background
        burgundy: '#390517',    // Deep burgundy - accents
        gold: '#A38560',        // Elegant gold - highlights
        pearl: '#E0E0E0',       // Light gray - text
        
        // Gradient variations for smooth transitions
        'burgundy-light': '#4D0A1F',
        'gold-light': '#B59970',
        'teal-light': '#1F4039',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #390517 0%, #A38560 100%)',
        'elegant-gradient': 'linear-gradient(135deg, #390517 0%, #A38560 50%, #390517 100%)',
        'gold-shine': 'linear-gradient(90deg, #A38560 0%, #B59970 50%, #A38560 100%)',
        'deep-gradient': 'linear-gradient(180deg, #03110D 0%, #16302B 100%)',
      }
    },
  },
  plugins: [],
}
