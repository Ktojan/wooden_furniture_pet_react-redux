import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";
import { applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunkMiddleware from 'redux-thunk';

export default configureStore({
    reducer: { 
        cartItems: cartItemsReducer,
        checkout: checkoutReducer
    }
})

// const bindMiddleware = middleware => {
//     return composeWithDevTools(applyMiddleware(...middleware));
// };

// const initStore = (initialState = {}) => {
//     return configureStore({
//         reducer: { 
//             cartItems: cartItemsReducer,
//             checkout: checkoutReducer
//         }
//         },
//         initialState,
//         bindMiddleware([thunkMiddleware]));
// };


// export const wrapper = createWrapper(initStore, { debug: true });
