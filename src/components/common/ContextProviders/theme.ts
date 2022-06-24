import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    fill: {
      '300': '#2a81fb',
      '100': 'rgba(42, 129, 251, 0.1)',
    },
    border: {
      '100': '#C7D3D9',
    },
  },
});

export default theme;
