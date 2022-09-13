import { createSlice } from "@reduxjs/toolkit";

const defaultGames = createSlice({
    name: 'cart',
    initialState: {
        GamesSlider: []
    },
    reducers: {
        defaultGame: (state, action) => {
            state.GamesSlider.push(action.payload) 
    }
}
});

export const {defaultGame} = defaultGames.actions;
export default defaultGames.reducer;