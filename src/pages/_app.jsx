import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import store from '../store';
import '../app/globals.css';
import Navbar from '../components/navbar';
import theme from '../utils/theme/theme';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  return (
    <Provider store={store}>
      {
        loading ? (
          <ThemeProvider theme={theme}>
            <Navbar />
            <Component {...pageProps} store={store} />
          </ThemeProvider>
        )
          :
          <h1>.</h1>
      }

    </Provider>
  );
}
