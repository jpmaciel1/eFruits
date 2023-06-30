'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import data from '../../data/mockedData/mock.json';
import { Image, Wrapper } from './styled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Gallery() {
  const CurrencyFormat = (value) => {
    const formattedValue = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formattedValue;
  };

  return (
    <Grid container spacing={2}>
      {data.frutas.map((item) => (
        <Grid item xs={3} key={item.id} display="flex" justifyContent="center">
          <Paper elevation={3}>
            <Wrapper>
              <Image src={item.imagem} alt="fruit" />
            </Wrapper>
            <Typography variant="h5" component="h5" textAlign="center">
              {item.nome}
            </Typography>
            <Typography variant="h5" component="h5" textAlign="center">
              {CurrencyFormat(item.preco)}
            </Typography>
            <Button variant="contained" fullWidth>Comprar</Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Gallery;
