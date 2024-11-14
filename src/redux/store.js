import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/cartSlice";

export const store=configureStore({
    reducer:{
        cart:CartSlice
    }
})