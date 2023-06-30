'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Navbar from '../components/navbar';
import Gallery from '../components/gallery';
import store from '../store';
import theme from '../utils/theme/theme';

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Gallery />
      </ThemeProvider>
    </Provider>
  );
}
