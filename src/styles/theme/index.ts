import { extendTheme } from '@chakra-ui/react';
import { theme } from '@synthetixio/v3-theme';
import { fonts } from './fonts';

export const customTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        bg: 'navy.900',
      },
    },
  },
  breakpoints: {
    ...theme.breakpoints,
    c900: '950px',
  },
  fonts,
});
