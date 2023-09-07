import { Product } from "../Services/GetProductApi";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    data: null,
    isLoader: false,
    isError: false,
}

const ProductSlice = createSlice({
    name: 'getProduct',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(Product.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(Product.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(Product.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        });

    }
})

export default ProductSlice.reducer;