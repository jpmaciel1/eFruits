import { configureStore, createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity = quantity;
      }
    },
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const myItem = state.find((item) => item.id === id);
      if (myItem) {
        myItem.quantity = quantity;
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Sucesso no login
          console.log('Usuário logado com sucesso!');
        })
        .catch((error) => {
          // Lidar com erro de login
          console.error(error);
        });
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addToCart, removeFromCart, updateQuantity, setQuantity, login } = cartSlice.actions;

export default store;
