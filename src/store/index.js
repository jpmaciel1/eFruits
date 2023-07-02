import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  },
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const { email, password } = payload;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const userInfo = {
      email: response.user.email,
      accessToken: response.user.accessToken,
    };
    localStorage.setItem('userInfos', JSON.stringify(userInfo));
    return { status: true };
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: false,
  },
  reducers: {
    updateUserStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(login.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});

export const { addToCart, removeFromCart, updateQuantity, setQuantity } = cartSlice.actions;

export const { updateUserStatus } = userSlice.actions;

export default store;
