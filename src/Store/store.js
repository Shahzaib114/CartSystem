import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import reducer from "./reducer";
import { getApi } from "../Services/productApi";




export const store = configureStore({
    reducer: {
        reducer: reducer,
        [getApi.reducerPath]: getApi.reducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(getApi.middleware),
});

setupListeners(store.dispatch);
export default store;