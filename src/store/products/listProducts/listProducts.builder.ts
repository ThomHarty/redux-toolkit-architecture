import {ActionReducerMapBuilder, PayloadAction} from '@reduxjs/toolkit';

import {IProductsState} from '../products.types';
import {listProducts} from './listProducts.thunk';
import {ListProductsResponse} from './listProducts.types';

export const listProductsBuilder = (
  builder: ActionReducerMapBuilder<IProductsState>,
) => {
  builder.addCase(listProducts.pending, state => {
    state.loading = true;
  });
  builder.addCase(listProducts.rejected, state => {
    state.loading = false;
  });
  builder.addCase(
    listProducts.fulfilled,
    (state, action: PayloadAction<ListProductsResponse>) => {
      state.loading = false;
      state.products = action.payload;
    },
  );

  return builder;
};
