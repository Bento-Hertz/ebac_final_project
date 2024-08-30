import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatusMessage } from 'interfaces/IStatusMessage';

const initialState: IStatusMessage = {
    type: '',
    message: '',
    isActive: false
}

const statusMessageSlice = createSlice({
    name: 'statusMessage',
    initialState,
    reducers: {
        updateStatusMessage: (state, action: PayloadAction<IStatusMessage>) => {
            const newStatusMessage = action.payload;
            return newStatusMessage;
        },
        cleanStatusMessage: (state) =>  {
            state.type = '';
            state.message = '';
            state.isActive = false;
        }
    }
})

export default statusMessageSlice.reducer;
export const { updateStatusMessage, cleanStatusMessage } = statusMessageSlice.actions;