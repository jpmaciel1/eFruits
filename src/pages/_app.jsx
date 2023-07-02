import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import store from '../store';
import '../app/globals.css';
import Navbar from '../components/navbar';
import theme from '../utils/theme/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} store={store} />
      </ThemeProvider>
    </Provider>
  );
}
