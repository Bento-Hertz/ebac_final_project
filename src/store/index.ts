import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cart';
import cartToggleSlice from './reducers/cartToggle';
import statusMessageSlice from './reducers/statusMessage';

const store = configureStore({
    reducer: {
        statusMessage: statusMessageSlice,
        cart: cartSlice,
        cartToggle: cartToggleSlice
    }
});

export type RootReducer = ReturnType<typeof store.getState>

export default store;