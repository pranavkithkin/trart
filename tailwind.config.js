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
        // B2B AI Premium Palette (From Brand Guidelines)
        'charcoal': '#1C1C1C',      // Primary - Authority & Sophistication
        'canvas': '#EAE6E0',        // Background - Clean & Professional
        'slate': '#535366',         // Secondary - Trust & Stability
        'white': '#FFFFFF',         // Contrast - Clarity
        
        // Semantic color mapping for component usage
        'primary': '#1C1C1C',       // Charcoal for headers, primary elements
        'secondary': '#535366',     // Slate for secondary elements, icons
        'accent': '#535366',        // Slate for CTAs (can be adjusted for more pop)
        'bg-light': '#EAE6E0',      // Canvas for main backgrounds
        'bg-lighter': '#F5F3F0',    // Slightly lighter canvas variation
        'text-base': '#1C1C1C',     // Charcoal for primary text
        'text-muted': '#535366',    // Slate for secondary text
        'text-subtle': '#8A8A9D',   // Lighter slate for captions
        
        // Legacy color mappings (for gradual migration)
        'noir': '#1C1C1C',
        'teal': '#EAE6E0',
        'burgundy': '#535366',
        'gold': '#535366',
        'pearl': '#FFFFFF',
        
        // Functional variations
        'primary-light': '#2D2D2D',
        'primary-lighter': '#404040',
        'secondary-light': '#646478',
        'secondary-lighter': '#757589',
        'mist-light': '#EAE6E0',
      },
      fontFamily: {
        'heading': ['Poppins', 'Manrope', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
        'accent': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Manrope', 'system-ui', 'sans-serif'], // Legacy
      },
      fontSize: {
        'heading-1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 56-64px
        'heading-2': ['2.25rem', { lineHeight: '1.1', fontWeight: '600' }], // 36-40px
        'heading-3': ['1.75rem', { lineHeight: '1.1', fontWeight: '600' }], // 28px
        'body-large': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }], // 20px - increased for readability
        'body-base': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px - increased for readability
        'body-small': ['1rem', { lineHeight: '1.5', fontWeight: '400' }], // 16px - for less important text
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',    // Ultrawide support
        '4xl': '1920px',    // Full ultrawide support
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
