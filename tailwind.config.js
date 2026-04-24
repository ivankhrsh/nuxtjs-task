/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1024px',
      xl: '1240px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'on-surface':             'rgb(var(--color-on-surface) / <alpha-value>)',
        'on-surface-variant':     'rgb(var(--color-on-surface-variant) / <alpha-value>)',
        'outline':                'rgb(var(--color-outline) / <alpha-value>)',
        'outline-variant':        'rgb(var(--color-outline-variant) / <alpha-value>)',
        'primary-value':          'rgb(var(--color-primary) / <alpha-value>)',
        'primary-container':      'rgb(var(--color-primary-container) / <alpha-value>)',
        'on-primary-container':   'rgb(var(--color-on-primary-container) / <alpha-value>)',
        'secondary-container':    'rgb(var(--color-secondary-container) / <alpha-value>)',
        'on-secondary-container': 'rgb(var(--color-on-secondary-container) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          lowest:  'rgb(var(--color-surface-lowest) / <alpha-value>)',
          low:     'rgb(var(--color-surface-low) / <alpha-value>)',
          high:    'rgb(var(--color-surface-high) / <alpha-value>)',
        },
        'header-bg':  '#1B243D',
        'logo-blue':  '#477BFF',
        'portal-primary-light-100': 'rgb(var(--color-table-header) / <alpha-value>)',
        status: {
          'completed-bg':  'rgb(var(--color-status-completed-bg) / <alpha-value>)',
          'completed-ink': 'rgb(var(--color-status-completed-ink) / <alpha-value>)',
          'rejected-bg':   'rgb(var(--color-status-rejected-bg) / <alpha-value>)',
          'rejected-ink':  'rgb(var(--color-status-rejected-ink) / <alpha-value>)',
        },
        action: {
          primary: {
            hover: '#17369E',
            active: '#142F8E',
            'dark-text': '#1B2D88',
            'dark-hover': '#CAD0FF',
            'dark-active': '#BAC3FF',
          },
          tonal: {
            hover: '#C8CFFD',
            'dark-hover': '#2E4290',
          },
        },
      },
      borderRadius: {
        pill: '100px',
        card: '24px',
        row:  '16px',
        tile: '12px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        logo: ['Montserrat', 'sans-serif'],
        nums: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        chart: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        label: ['0.9375rem', { lineHeight: '1.25rem' }],
        'title-sm': ['1.375rem', { lineHeight: '1.75rem' }],
      },
      letterSpacing: {
        label: '0.1px',
        body: '0.15px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-70px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-scale': 'fade-in-scale 0.8s ease-out forwards',
        'slide-in-down': 'slide-in-down 1s ease-out forwards',
        'slide-in-up': 'slide-in-up 1s ease-out forwards',
        'scale-in': 'scale-in 0.8s ease-out forwards',
        'soft-pulse': 'soft-pulse 1.5s infinite ease-in-out',
      },
      boxShadow: {
        card: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        inset: 'inset 0 2px 5px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(0, 0, 0, 0.3)',
        button: '0 8px 20px rgba(0, 0, 0, 0.4)',
        'button-hover': '0 12px 25px rgba(0, 0, 0, 0.5)',
        'row':   '0 0.5px 1.5px rgba(0,0,0,0.05)',
        'card-light': '0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.08)',
        'card-light-lg': '0 8px 24px rgba(16, 24, 40, 0.08), 0 2px 6px rgba(16, 24, 40, 0.05)',
      },
    },
  },
}
