import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increase: (state, action) => {
            state.counter = action.payload+1;
        },
        decrease: (state, action) => {
            state.counter = action.payload-1;
        },
    },

});

export const { increase, decrease } = counterSlice.actions;

export const actCounter = (state) => state.counter;

export default counterSlice.reducer;