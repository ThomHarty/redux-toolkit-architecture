import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { IProductsState } from "../products.types";
import { getProduct } from "./getProduct.thunk";
import { GetProductResponse } from "./getProduct.types";

export const getProductBuilder = (
    builder: ActionReducerMapBuilder<IProductsState>
) => {
    builder.addCase(getProduct.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getProduct.rejected, (state) => {
        state.loading = false;
    });
    builder.addCase(getProduct.fulfilled, (
        state,
        action: PayloadAction<GetProductResponse>
    ) => {
        state.loading = false;
        state.current = action.payload;
    });
  
    return builder;
};
