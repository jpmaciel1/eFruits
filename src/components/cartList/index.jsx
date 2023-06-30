import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store';

function CartList() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveOne = (item) => {
    dispatch(removeFromCart(item));
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
        <ul>
          {groupedItems.map((item) => (
            <li key={item.id}>
              <div>
                <h3>{item.nome}</h3>
                <p>
                  Quantidade:
                  {' '}
                  {item.quantity}
                </p>
                <button type="button" onClick={() => handleRemoveOne(item)}>
                  Remover 1 unidade
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartList;
