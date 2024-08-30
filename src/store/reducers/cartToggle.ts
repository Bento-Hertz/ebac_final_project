import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const cartToggleSlice = createSlice({
    name: 'cartToggle',
    initialState,
    reducers: {
        toggleCart: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        }
    }
})

export default cartToggleSlice.reducer;
export const { toggleCart } = cartToggleSlice.actions;