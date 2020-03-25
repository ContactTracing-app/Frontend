import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Poppins, serif',
    mono: 'Menlo, monospace'
  },
  colors: {
    ...theme.colors,
    brand: {
      ice: 'white',
      coldGrey: '#d5dae7'
    }
  }
};

export default customTheme;
