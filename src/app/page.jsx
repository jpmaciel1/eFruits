'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/navbar';
import Gallery from '../components/gallery';
import theme from '../utils/theme/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Gallery />
    </ThemeProvider>
  );
}
