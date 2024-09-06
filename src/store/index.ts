import { configureStore } from '@reduxjs/toolkit';
import statusMessageSlice from './reducers/statusMessage';
import sidebarToggleSlice from './reducers/sidebarToggle';
import currentSidebarSectionSlice from './reducers/currentSidebarSection';
import cartSlice from './reducers/cart';

const store = configureStore({
    reducer: {
        statusMessage: statusMessageSlice,
        sidebarToggle: sidebarToggleSlice,
        currentSidebarSection: currentSidebarSectionSlice,
        cart: cartSlice
    }
});

export type RootReducer = ReturnType<typeof store.getState>

export default store;