
import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
    cart: Product[];
};

const initialState = {
    cart: [],
} as CartState;

export const cart = createSlice({
    name: "token",
    initialState,
    reducers: {
        reset: () => initialState,
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item ._id !== action.payload._id)
        },
        emptyCart : (state, action)=>{
            state.cart = []
        }
    },
});

export const {
    addToCart,
    removeFromCart,
    reset,
    emptyCart
} = cart.actions;
export default cart.reducer;