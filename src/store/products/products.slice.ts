import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./products.state";

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

export const productsReducer = productsSlice.reducer;
