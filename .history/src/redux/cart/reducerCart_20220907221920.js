import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: cart,
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload) 
    },
  
})