import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Typography, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import data from '../../data/mockedData/mock.json';
import { CurrencyFormat } from '../../utils/formatters';

import { Image, Wrapper, Container, SearchBarWrapper } from './styled';
import { addToCart } from '../../store';

function Gallery() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredItems = data.frutas.filter((item) => item.nome.toLowerCase().includes(query));

    setFilteredData(filteredItems);
  };

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
          {searchQuery !== '' ? (
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
            data.frutas.map((item) => (
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
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Gallery;
