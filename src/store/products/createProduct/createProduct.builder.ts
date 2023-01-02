import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { IProductsState } from "../products.types";
import { createProduct } from "./createProduct.thunk";
import { CreateProductResponse } from "./createProduct.types";

export const createProductBuilder = (
    builder: ActionReducerMapBuilder<IProductsState>
) => {
    builder.addCase(createProduct.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(createProduct.rejected, (state) => {
        state.loading = false;
    });
    builder.addCase(createProduct.fulfilled, (
        state,
        action: PayloadAction<CreateProductResponse>
    ) => {
        state.loading = false;
        state.products = [...state.products, action.payload];
    });
  
    return builder;
};
