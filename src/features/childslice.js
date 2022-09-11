import { createSlice } from "@reduxjs/toolkit";

export const childSlice = createSlice({
    name: "childtext",
    initialState: {
        childtext: "",
    },
    reducers: {
        inserttext: (state, action) => {
            state.childtext = action.payload;
        },
    },

});

export const { inserttext } = childSlice.actions;
export const actchild = (state) => state.childtext;

export default childSlice.reducer;

