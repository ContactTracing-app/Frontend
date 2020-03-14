import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      coldGrey: '#d5dae7'
    }
  }
};

export default customTheme;
