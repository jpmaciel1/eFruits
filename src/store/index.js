import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
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

  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addToCart, removeFromCart, updateQuantity, setQuantity } = cartSlice.actions;

export default store;
