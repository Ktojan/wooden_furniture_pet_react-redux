import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        discount: 0
    },
    reducers: {        
        changeDiscount: (state, action) => {
            state.discount = action.payload;
        }
    }
})

export const { changeDiscount } = checkoutSlice.actions;

export default checkoutSlice.reducer;
