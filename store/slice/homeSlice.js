import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        homeData: [],
    },
    reducers: {
        homeData: (state, action) => {
            state.homeData = action.payload;
        }
    }
});

export const { homeData } = homeSlice.actions;

export default homeSlice.reducer;

