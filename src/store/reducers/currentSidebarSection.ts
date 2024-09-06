import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type currentSidebarSection = 'cart' | 'checkout';

const initialState = 'cart';

const currentSidebarSectionSlice = createSlice({
    name: 'currentSidebarSection',
    initialState,
    reducers: {
        changeCurrentSidebarSection(state, action: PayloadAction<currentSidebarSection>) {
            const nextSection = action.payload;
            return nextSection;
        }
    }
});

export default currentSidebarSectionSlice.reducer;
export const { changeCurrentSidebarSection } = currentSidebarSectionSlice.actions;