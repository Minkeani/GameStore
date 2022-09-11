import { configureStore } from "@reduxjs/toolkit";
import reducerCart from "./cart/reducerCart";

export const store = configureStore({
    reducer: {
        cart: reducerCart
    }
}
)