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
      blue: '#5C6DF8',
      orange: '#FF550D',
      warmGrey: '#F8F8F8'
    }
  }
};

export default customTheme;
