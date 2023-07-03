import React, { useState, useMemo, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Typography, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import { ToastContainer, toast } from 'react-toastify';
import data from '../../data/mockedData/mock.json';
import { CurrencyFormat } from '../../utils/formatters';
import { Image, Wrapper, Container, SearchBarWrapper } from './styled';
import { addToCart } from '../../store';

import 'react-toastify/dist/ReactToastify.css';

function Gallery() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const notify = () => toast.success('Fruta adicionada ao carrinho!', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });

  const handleAddToCart = useCallback((product) => {
    dispatch(addToCart(product));
    notify();
  }, []);

  const handleSearch = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  const filteredData = useMemo(() => {
    if (!searchQuery.length) return data.frutas;

    const queryToCompare = searchQuery.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
    return data.frutas.filter((item) => item.nome.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(queryToCompare));
  }, [searchQuery, data]);

  return (
    <>
      <SearchBarWrapper>
        <FilledInput
          id="search-bar"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Pesquisar produto"
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="search"
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )}
        />
      </SearchBarWrapper>

      <Container>
        <Grid container spacing={4}>
          {filteredData.length ? (
            filteredData.map((item) => (
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
            ))
          ) : (
            <p>Nenhum item encontrado</p>
          )}
        </Grid>
        <ToastContainer limit={3} />
      </Container>
    </>
  );
}

export default Gallery;
