import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState: [       
    ],
    reducers: {
        addItemToCart: (state, action) => {
            state.push(action.payload)
        },
        removeCartItem: (state, action) => {
            return state.filter(item => item._id !== action.payload)
        },
        changeItemQuantity: (state, action) => {
            const data = action.payload;
            const index = state.findIndex(pr => pr._id === data._id);
            if (index >= 0) state[index].quantity = data.quantity;
        }
    }
})

export const { addItemToCart, removeCartItem, changeItemQuantity } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
