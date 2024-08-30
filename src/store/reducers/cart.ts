import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDish } from 'interfaces/IDish';

interface ICartDish extends IDish {
    quantity: number;
}

interface ICartList {
    items: ICartDish[];
    totalPrice: number;
}

const initialState: ICartList = {
    items: [],
    totalPrice: 0
};

function updateTotalPrice(items: ICartDish[]) {
    let totalPrice = 0;
    items.forEach((item) => {
        totalPrice += item.preco * item.quantity;
    });
    return totalPrice;
}

const cartSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IDish>) => {
            const newItem = action.payload;

            if(state.items.find((item) => item.id === newItem.id)) {
                state.items.map((item) => {
                    if(item.id === newItem.id)
                        return {...item, quantity: item.quantity++};
                    return item;
                })
            } else {
                state.items.push({...newItem, quantity: 1});
            }
 
            state.totalPrice = updateTotalPrice(state.items);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);

            state.totalPrice = updateTotalPrice(state.items);
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;