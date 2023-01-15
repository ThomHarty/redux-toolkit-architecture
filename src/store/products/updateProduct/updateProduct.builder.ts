import {ActionReducerMapBuilder, PayloadAction} from '@reduxjs/toolkit';

import {IProductsState} from '../products.types';
import {updateProduct} from './updateProduct.thunk';
import {UpdateProductResponse} from './updateProduct.types';

export const updateProductBuilder = (
  builder: ActionReducerMapBuilder<IProductsState>,
) => {
  builder.addCase(updateProduct.pending, state => {
    state.loading = true;
  });
  builder.addCase(updateProduct.rejected, state => {
    state.loading = false;
  });
  builder.addCase(
    updateProduct.fulfilled,
    (state, action: PayloadAction<UpdateProductResponse>) => {
      state.loading = false;
      state.products = [...state.products, action.payload];
    },
  );

  return builder;
};
