import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  body: '#FFF',
  text: '#1c1c1d',
  colors: {
    default: '#479eb9',
    action: ' #236b85',
    error: '#ff0000',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
