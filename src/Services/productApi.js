import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getApi = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    // tagTypes: 'personal',
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => ({
                url: 'products/categories',
                method: 'get',
            }),
        
        }),
          getProductsByCatagory: builder.query({
            query: () => {
                return{
                url: `products`,
                method: 'get',
                }
            },
        
        }),
    }),
});

export const
    {
        useGetProductsQuery,
        useGetProductsByCatagoryQuery
        
        
    } = getApi;