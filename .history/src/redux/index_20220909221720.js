import { configureStore } from "@reduxjs/toolkit";
import reducerCart from "./cart/reducerCart";
import gamesReducer from "./games/gamesReducer";

export const store = configureStore({
    reducer: {
        cart: reducerCart,
        game: gamesReducer
    }
  })
