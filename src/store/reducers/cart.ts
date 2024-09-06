import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDish } from 'interfaces/IDish';

interface ICartList {
    items: IDish[];
    totalPrice: number;
    quantity: number;
}

const initialState: ICartList = {
    items: [],
    totalPrice: 0,
    quantity: 0
};

function updateTotalPrice(items: IDish[]) {
    let totalPrice = 0;
    items.forEach((item) => {
        totalPrice += item.preco;
    });
    return totalPrice;
}

const cartSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IDish>) => {
            const newItem = action.payload;

            state.items.push(newItem);
            state.totalPrice = updateTotalPrice(state.items);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;

            state.items = state.items.filter((item) => item.id !== id);
            state.totalPrice = updateTotalPrice(state.items);
        },
        updateQuantityOfProducts: (state, action: PayloadAction<number>) => {
            const newQuantity = action.payload;

            state.quantity = newQuantity;
        },
        cleanCart: (state) => {
            const newState: ICartList = {
                items: [],
                totalPrice: 0,
                quantity: 0
            }
            return newState;
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, updateQuantityOfProducts, cleanCart } = cartSlice.actions;