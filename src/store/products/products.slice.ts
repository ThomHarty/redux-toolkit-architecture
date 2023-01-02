import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./products.state";
import { createProductBuilder } from "./createProduct/createProduct.builder";
import { getProductBuilder } from "./getProduct/getProduct.builder";
import { listProductsBuilder } from "./listProducts/listProducts.builder";
import { updateProductBuilder } from "./updateProduct/updateProduct.builder";

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        listProductsBuilder(builder);
        getProductBuilder(builder);
        createProductBuilder(builder);
        updateProductBuilder(builder);
    },
});

export const productsReducer = productsSlice.reducer;
