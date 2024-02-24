import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	isEmpty: true,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			let existingItems = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (existingItems) {
				existingItems.qty++;
			} else {
				state.cart.push({ ...action.payload, qty: 1 });
			}
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
