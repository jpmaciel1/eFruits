import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Typography, Select, MenuItem, Button } from '@mui/material';
import { removeFromCart, setQuantity } from '../../store';
import { Container, ImageWrapper, Image, Card } from './styled';

function CartList() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveAll = (item) => {
    Array.from({ length: item.quantity }).forEach(() => {
      dispatch(removeFromCart(item));
    });
  };

  const handleQuantityChange = (itemId, event) => {
    const quantity = parseInt(event.target.value, 10);
    dispatch(setQuantity({ id: itemId, quantity }));
  };

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {groupedItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <Container>
          {groupedItems.map((item) => {
            const valorTotal = item.preco * item.quantity;
            const valorFormatado = `R$ ${valorTotal.toFixed(2)}`;

            return (
              <Card key={item.id}>
                <Paper elevation={4}>
                  <Container>
                    <ImageWrapper>
                      <Image src={item.imagem} alt="fruit" />
                    </ImageWrapper>
                    <Typography variant="h7">{item.nome}</Typography>
                    <p>
                      Quantidade:
                      {' '}
                      <Select
                        value={item.quantity}
                        onChange={(event) => handleQuantityChange(item.id, event)}
                      >
                        {Array.from({ length: 10 }).map((_, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <MenuItem key={index} value={index}>{index}</MenuItem>
                        ))}
                      </Select>
                    </p>
                    <p>
                      Valor Total:
                      {' '}
                      {Number.isNaN(valorTotal) ? 'R$ 0.00' : valorFormatado}
                    </p>
                    <Button onClick={() => handleRemoveAll(item)}>Remover todas as unidades</Button>
                  </Container>
                </Paper>
              </Card>
            );
          })}
        </Container>
      )}
    </div>
  );
}

export default CartList;
