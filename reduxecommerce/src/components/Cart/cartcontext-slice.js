import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cartItems: [],
}

const cartcontextSlice = createSlice({
    name: 'cartcontext',
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            const item = action.payload;
            const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex >= 0) {
                state.cartItems[existingItemIndex] = {
                    ...state.cartItems[existingItemIndex],
                    quantity: state.cartItems[existingItemIndex].quantity + 1
                };
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        
        removeCartItems: (state, action) => {
            const item = action.payload;
            const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex >= 0) {
                const currentItem = state.cartItems[existingItemIndex];
                if (currentItem.quantity === 1) {
                    state.cartItems.splice(existingItemIndex, 1);
                } else {
                    state.cartItems[existingItemIndex] = {
                        ...currentItem,
                        quantity: currentItem.quantity - 1
                    };
                }
            }
        },
        deleteFromCart: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== item.id);
        },
    },
})

export const { setCartItems, removeCartItems, deleteFromCart } = cartcontextSlice.actions;

export default cartcontextSlice.reducer;
