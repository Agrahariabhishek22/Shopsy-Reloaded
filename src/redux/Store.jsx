import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import  WishlistSlice  from "./slice/WishlistSlice";

export const store=configureStore({
    reducer:{
        cart:CartSlice,
        wishlist:WishlistSlice,
    }
});