import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/userslice";


export default configureStore({
    reducer:{
        counter:counterReducer,

    },
})