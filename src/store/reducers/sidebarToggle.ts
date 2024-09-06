import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const sidebarToggleSlice = createSlice({
    name: 'sidebarToggle',
    initialState,
    reducers: {
        toggleSidebar: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        }
    }
})

export default sidebarToggleSlice.reducer;
export const { toggleSidebar } = sidebarToggleSlice.actions;