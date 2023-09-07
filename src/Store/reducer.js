import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: null, // You might have a different initial value here
};

const salarySlice = createSlice({
    name: 'ProductReducer',
    initialState: { items: [], idCounter: 1 },
    reducers: {
        setCategoryName: (state, action) => {
            state.categoryName = action.payload;
        },
        addProduct: (state, action) => {
            state.items.push({ ...action.payload, id: state.idCounter });
            state.idCounter++;
        },
        removeProdct: (state, action) => {
            const brandToRemove = action.payload.brand;
            const indexToRemove = state.items.findIndex((item) => item.brand === brandToRemove);
            if (indexToRemove !== -1) {
                // Create a new array without the item at the specified index
                const updatedItems = [...state.items.slice(0, indexToRemove), ...state.items.slice(indexToRemove + 1)];
                // Return a new state object with the updated items array
                return {
                    ...state,
                    items: updatedItems,
                    idCounter: state.items.length - 1
                };
            }
            // If no matching brand was found, return the current state unchanged
            return state;
        },
    }
});

export const {
    setCategoryName,
    addProduct,
    removeProdct
}
    = salarySlice.actions;

export default salarySlice.reducer;