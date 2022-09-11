import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games/gamesReducer';
import reducerCart from './cart/reducerCart';

export const store = configureStore({
    reducer: {
        games: gamesReducer,
        cart: reducerCart
    }
  })