import { createSlice } from "@reduxjs/toolkit";

import { createProductBuilder } from "./createProduct/createProduct.builder";
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
        createProductBuilder(builder);
    },
});

export const productsReducer = productsSlice.reducer;
