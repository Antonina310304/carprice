import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material';

import theme from '@components/themeOptions';

import store from '../store';

import '@styles/globals.css';
import '@styles/normalize.css';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
