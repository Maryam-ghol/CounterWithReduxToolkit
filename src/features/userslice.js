import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
   },
    reducers: {
        increase: (state,action) => {
            state.counter= action.payload;
        },
        decrease: (state,action) => {
            state.counter = action.payload;
        },
      
    },

});


export const { increase, decrease} = counterSlice.actions;


export const actCounter = (state) => state.counter;


export default counterSlice.reducer;