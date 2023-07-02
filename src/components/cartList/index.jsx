import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Typography, IconButton, Button } from '@mui/material';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from 'next/navigation';
import { removeFromCart, addToCart } from '../../store';
import { Container, ImageWrapper, Image, Card, QuantityContainer, CheckoutButtonWrapper } from './styled';

function CartList() {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveOne = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleAddOne = (item) => {
    dispatch(addToCart(item));
  };

  const renderQuantityControl = (item) => (
    <QuantityContainer>
      <IconButton variant="contained" onClick={() => handleRemoveOne(item)} style={{ maxWidth: '20px', height: '20px' }}><IndeterminateCheckBoxIcon /></IconButton>
      <Typography variant="h6">{item.quantity}</Typography>
      <IconButton variant="contained" color="primary" onClick={() => handleAddOne(item)} style={{ width: '20px', height: '20px' }}><AddBoxIcon /></IconButton>
    </QuantityContainer>
  );
  console.log('!!!', cartItems);
  return (
    <div>
      <Typography variant="h5" textAlign="center">Carrinho de Compras</Typography>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <Container>
          {cartItems.map((item) => {
            const valorTotal = item.preco * item.quantity;
            const valorFormatado = `R$ ${valorTotal.toFixed(2)}`;

            return (
              <Card key={item.id}>
                <Paper elevation={4} style={{ maxWidth: '190px' }}>
                  <Container>
                    <ImageWrapper>
                      <Image src={item.imagem} alt="fruit" />
                    </ImageWrapper>
                    <Typography variant="h7">{item.nome}</Typography>
                    {renderQuantityControl(item)}
                    <p>
                      Valor Total:
                      {' '}
                      {valorFormatado}
                    </p>
                  </Container>
                </Paper>
              </Card>
            );
          })}
        </Container>
      )}
      <CheckoutButtonWrapper>
        <Button
          variant="contained"
          onClick={() => router.push('/checkout')}
          fullWidth
        >
          Finalizar Compra
        </Button>
      </CheckoutButtonWrapper>
    </div>
  );
}

export default CartList;
