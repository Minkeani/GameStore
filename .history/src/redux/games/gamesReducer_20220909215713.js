import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        currentGame: null
    },
    reducers: {
        setCurrentGame: (state, action) => {
        state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
    }
}
});

export const {setCurrentGame} = cartSlice.actions;
export default cartSlice.reducer;