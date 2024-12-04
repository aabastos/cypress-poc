const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        syne: ['Syne'],
      },
      colors: {
        'neutral-darkest': '#142332',
        'neutral-darkest-0.48': '#1423327A',
        'neutral-darker': '#243647',
        'neutral-dark': '#677380',
        'neutral-dark-0.12': '#6773801e',
        'neutral-medium': '#9CA9B5',
        'neutral-light': '#CED7E0',
        'neutral-lighter': '#E4EAF0',
        'neutral-lightest': '#F2F4F7',
        'neutral-day': '#FFFFFF',

        'brand-darker': '#B3324F',
        'brand-dark': '#D94162',
        'brand-medium': '#FF5076',
        'brand-light': '#FFC3D3',
        'brand-lighter': '#FFF0F4',

        'success-darker': '#035830',
        'success-dark': '#088048',
        'success-medium': '#10A660',
        'success-light': '#66DBA1',
        'success-lighter': '#E1FAEC',

        'warning-darker': '#8C5100',
        'warning-dark': '#C67100',
        'warning-medium': '#F79009',
        'warning-light': '#FFC673',
        'warning-lighter': '#FFF5E6',

        'danger-darker': '#7E1C16',
        'danger-dark': '#B92F25',
        'danger-medium': '#F04438',
        'danger-light': '#FF7D73',
        'danger-lighter': '#FFEEED',

        'info-darker': '#123A75',
        'info-dark': '#2158AA',
        'info-medium': '#3375D6',
        'info-light': '#77AFFF',
        'info-lighter': '#E3EEFF',
        'info-green': '#F6FF91',

        // marketing website colors
        'neutral-25': '#FCFCFD',
        'neutral-400': '#98A2B3',
        'neutral-500': '#667085',
        'neutral-600': '#475467',
        'neutral-900': '#101828',
        'accent-600': '#E54769',
        'warning-400': '#FDB022',
        'blue-300': '#84CAFF',
        'blue-700': '#175CD3',
        'blue-blur': '#216BD9',
        'error-700': '#B42318',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        square: 'square',
      },
      backgroundImage: {
        checked: "url('/public/icons/checked.svg')",
        banner: "url('/public/icons/candidate-banner.png')",
        ellipse: "url('/public/images/ellipse-bg.svg')",
        briefing: "url('/public/images/briefing/briefing-introduction_3x.png')",
        'briefing-mobile': "url('/public/images/briefing/briefing-introduction-mobile_2x.png')",
        'transparent-white-transparent':
          'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
      },
      keyframes: {
        expand: {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        collapse: {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        rightLeft: {
          from: { right: '-100%' },
          to: { right: 0 },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        swipe: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-100%)' },
        },
        'slide-in-from-top': {
          '0%, 50%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-in-from-bottom': {
          '0%, 50%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      screens: {
        print: { raw: 'print' },
        xs: '480px',
        '2xl': '1440px',
        '3xl': '1640px',
        '4xl': '1920px',
      },
      animation: {
        'slideIn-right': 'rightLeft 1s',
        'fade-in': 'fadeIn 500ms',
        swipe: 'swipe 30s linear infinite backwards',
        'slide-in-from-top': 'slide-in-from-top 2s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 2s ease-out',
      },
      boxShadow: {
        'level-1': '0px 4px 8px -4px rgba(12,24,34,0.08)',
        'level-2': '0px 4px 8px 0px #0C182214',
        'level-3': '0px 4px 16px -4px rgba(12,24,34,0.16)',
        'level-4': '0px 8px 24px 4px #0C182214',
        'level-focus': '0px 0px 0px 4px #FFBACD',
      },
      blur: {
        gradient: '100px',
        xs: '2px',
      },
      padding: {
        15: '60px',
      },
      opacity: {
        32: '0.32',
        33: '0.33',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin((helpers) => {
      dataStateVariant('open', helpers)
      dataStateVariant('closed', helpers)
      dataStateVariant('on', helpers)

      dataOrientationVariant('horizontal', helpers)
      dataOrientationVariant('vertical', helpers)
    }),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }),
  ],
}

const dataStateVariant = (state, { addVariant, e }) => {
  addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`data-state-${state}${separator}${className}`)}[data-state='${state}']`
    })
  })
}

const dataOrientationVariant = (orientation, { addVariant, e }) => {
  addVariant(`data-orientation-${orientation}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `data-state-${orientation}${separator}${className}`,
      )}[data-orientation='${orientation}']`
    })
  })
}
