'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import data from '../../data/mockedData/mock.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Gallery() {
  return (
    <Grid container spacing={4}>
      {data.frutas.map((item) => (
        <Grid item xs={4} key={item.id}>
          <Image src={}
          <Item>{item.nome}</Item>
        </Grid>
      ))}
    </Grid>
  );
}

export default Gallery;
