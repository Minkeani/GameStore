import { createSlice } from "@reduxjs/toolkit";

const defaultGames = createSlice({
    name: 'defaultGames',
    initialState: {
        GamesSlider: []
    },
    reducers: {
        defaultGame: (state, action) => {
            state.GamesSlider = action.payload
        }
}
});

export const {defaultGame} = defaultGames.actions;
export default defaultGames.reducer;