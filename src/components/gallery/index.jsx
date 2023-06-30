'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import data from '../../data/mockedData/mock.json';
import { Image, Wrapper, Container } from './styled';
import { addToCart } from '../../store';

function Gallery() {
  const dispatch = useDispatch();
  const CurrencyFormat = (value) => {
    const formattedValue = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formattedValue;
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {data.frutas.map((item) => (
          <Grid item xs={12} md={3} sm={4} key={item.id} display="flex" justifyContent="center">
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
              <Button
                variant="contained"
                onClick={() => handleAddToCart(item)}
                fullWidth
              >
                Comprar
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Gallery;
