import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        purpleColor: '#7b5bf7',
        'gradient-dot':
          'linear-gradient(180deg, rgba(244, 244, 246, 1) 50%, rgba(236, 247, 255, 1) 50%)',
        'gradient-box':
          'linear-gradient(180deg, hsla(245, 100%, 98%), hsla(0, 100%, 94%, 0))',
        'gradient-item-howitworks':
          'linear-gradient(90deg, #f9f6fe 52%, hsla(12,45%,98%,0))',
          'gradient_slick_right': 'linear-gradient(90deg, hsla(0, 0%, 100%, 0.8) 4%, #fff 71%, #fff 99%)',
          'gradient_slick_left': 'linear-gradient(270deg, hsla(0, 0%, 100%, 0.8) 4%, #fff 71%, #fff 99%)',

      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        swiperActive: {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(-5px)' },
          '100%': { transform: 'translate(0)' },
        },
        swiperNext: {
          '0%': { height: '24px', transform: 'translate(24px)', width: '24px' },
          '40%': {
            height: '54px',
            transform: 'translate(-10px)',
            width: '54px',
          },
          '100%': { height: '48px', transform: 'translate(0)', width: '48px' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        swiperActive: 'swiperActive-f087a4a3 0.9s ease-in-out 0.1s',
        swiperNext: 'swiperNext-f087a4a3 1s ease-in-out',
      },
      screens: {
        tablet: { max: '1129px' },
        lapstops_big: { min: '1130px' },
        mobile: { max: '768' },
        laptops: { min: '1025px', max: '1300px' },
        small_SP: { max: '426px' },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
