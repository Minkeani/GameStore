import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games/gamesReducer';
import reducerCart from './cart/reducerCart';
import defaultGame from './defaultGame/defaultGame';

export const store = configureStore({
    reducer: {
        games: gamesReducer,
        cart: reducerCart,
        defaultGames: defaultGame
    }
  })