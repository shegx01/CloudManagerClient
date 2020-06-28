module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      },
      colors: {
        gray: {
          lightest: '#F0F4F8',
          200: '#D9E2EC',
          300: '#BCCCDC',
          400: '#9FB3C8',
          500: '#829AB1',
          600: '#627D98',
          700: '#486581',
          800: '#334E68',
          900: '#243B53',
          darkest: '#102A43'
        },
        danger: {
          lightest: '#FFE3E3',
          200: '#FFBDBD',
          300: '#FF9B9B',
          400: '#F86A6A',
          500: '#EF4E4E',
          600: '#E12D39',
          700: '#CF1124',
          800: '#AB091E',
          900: '#8A041A',
          darkest: '#610316'
        },
        warning: {
          lightest: '#FFFBEA',
          200: '#FFF3C4',
          300: '#FCE588',
          400: '#FADB5F',
          500: '#F7C948',
          600: '#F0B429',
          700: '#DE911D',
          800: '#CB6E17',
          900: '#B44D12',
          darkest: '#8D2B0B'
        },
        success: {
          lightest: '#EFFCF6',
          200: '#C6F7E2',
          300: '#8EEDC7',
          400: '#65D6AD',
          500: '#3EBD93',
          600: '#27AB83',
          700: '#199473',
          800: '#147D64',
          900: '#0C6B58',
          darkest: '#014D40'
        },
        app: {
          background: '#F5FAFF'
        }
      },
      spacing: {
        px2: '2px',
        px3: '3px',
        px5: '5px'
      }
    },
    inset: {
      '-px': '-1px',
      '-0': '-0',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-16': '-4rem',
      '-20': '-5rem'
    }
  },
  variants: {},
  plugins: []
}
