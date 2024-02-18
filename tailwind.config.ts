import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,md}'],
  darkMode: 'selector',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        paper: 'hsl(var(--color-light) / <alpha-value>)',
        light: 'hsl(var(--color-light) / <alpha-value>)',
        dark: 'hsl(var(--color-dark) / <alpha-value>)',
        'red': {
          '50': 'hsl(5, 86%, 97%)',
          '100': 'hsl(6, 93%, 94%)',
          '200': 'hsl(7, 100%, 89%)',
          '300': 'hsl(7, 96%, 82%)',
          '400': 'hsl(7, 93%, 71%)',
          '500': 'hsl(7, 86%, 60%)',
          '600': 'hsl(7, 74%, 49%)',
          '700': 'hsl(7, 76%, 42%)',
          '800': 'hsl(7, 72%, 35%)',
          '900': 'hsl(7, 64%, 31%)',
          '950': 'hsl(7, 77%, 15%)',
          // '50': 'hsl(0, 100%, 97%)',
          // '100': 'hsl(0, 100%, 93%)',
          // '200': 'hsl(359, 100%, 88%)',
          // '300': 'hsl(359, 100%, 79%)',
          // '400': 'hsl(359, 100%, 67%)',
          // '500': 'hsl(359, 100%, 57%)',
          // '600': 'hsl(359, 100%, 46%)',
          // '700': 'hsl(359, 100%, 42%)',
          // '800': 'hsl(359, 97%, 35%)',
          // '900': 'hsl(359, 87%, 31%)',
          // '950': 'hsl(359, 100%, 16%)',
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: ['var(--font-display)', { fontFeatureSettings: '"ss01"' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      // typography: ({theme}) => ({
      //   DEFAULT: {
      //     css: {
      //       '--tw-prose-pre-bg': theme('colors.dark'),
      //     },
      //   },
        // dark: {
        //   css: {
        //     color: theme('colors.white'),
        //     a: {
        //       color: theme('colors.red.500'),
        //       '&:hover': {
        //         color: theme('colors.red.600'),
        //       },
        //     },
        //   },
        // },
      // }),
    },
  },
  plugins: [typographyPlugin],
} satisfies Config
