import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/userslice";
import childReducer from "../features/childslice";


export default configureStore({
    reducer:{
        counter:counterReducer,
        childtext:childReducer,
    },

})