import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wish:[],
};  

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wish.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
       state.wish=state.wish.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
