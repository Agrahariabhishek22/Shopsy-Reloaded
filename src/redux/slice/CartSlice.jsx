import { createSlice } from "@reduxjs/toolkit";


export const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            const existing =state.find((p)=>p.id===action.payload.id);
            if(existing){
                existing.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1})
            }
        },
        remove:(state,action)=>{
             return state.filter((item)=>item.id!==action.payload);
        },
        incrementQuantity:(state,action)=>{
            const item =state.find((p)=>p.id===action.payload);
            if(item)item.quantity+=1;
        },
        decreaseQuantity:(state,action)=>{
            const item =state.find((p)=>p.id===action.payload);
            if(item&&item.quantity>1){
                item.quantity-=1;
            }
            else{
                return state.filter((item)=>item.id!==action.payload);
            }
        },
        clearCart: (state) => {
            return []; // Reset the cart to an empty array
          },
    },
})
export const{add,remove,incrementQuantity,decreaseQuantity,clearCart}=CartSlice.actions;
export default CartSlice.reducer;