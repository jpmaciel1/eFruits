import { configureStore, createSlice } from '@reduxjs/toolkit';

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

  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addToCart, removeFromCart, updateQuantity, setQuantity } = cartSlice.actions;

export default store;
