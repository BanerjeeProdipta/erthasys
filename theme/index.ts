import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: '#222222',
        background: '#F9F9F9',
      },
    },
  },
  colors: {
    brand: {
      100: '#3E6B52',
    },
    yellow: {
      100: '#E89924',
    },
    dark: {
      100: '#1d213075',
      900: '#1D2130',
    },
    gray: {
      100: '#E5E5E5',
    },
    offwhite: {
      100: '#F9F9F9',
    },
    red: {
      100: '#D32D42',
    },
  },

  fonts: {
    body: 'BalooDa2',
    heading: 'BalooDa2',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  components: {
    Button: {
      variants: {
        solid: {
          background: 'brand.100',
          color: '#fff',
          paddingLeft: '20px',
          paddingRight: '20px',
          _hover: {
            backgroundColor: 'yellow.100',
            _disabled: {
              background: 'brand.100',
            },
          },
          _active: {
            background: 'yellow.100',
          },
        },
        link: {
          color: 'dark.100',

          _active: {
            color: 'dark.900',
          },
          _hover: {
            color: 'dark.900',
          },
        },
      },
    },
  },
});

export default customTheme;
