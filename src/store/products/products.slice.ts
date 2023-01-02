import { createSlice } from "@reduxjs/toolkit";

import { getProductBuilder } from "./getProduct/getProduct.builder";
import { listProductsBuilder } from "./listProducts/listProducts.builder";
import { initialState } from "./products.state";

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        listProductsBuilder(builder);
        getProductBuilder(builder);
    },
});

export const productsReducer = productsSlice.reducer;
