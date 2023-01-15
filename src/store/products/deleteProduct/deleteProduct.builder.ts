import {ActionReducerMapBuilder, PayloadAction} from '@reduxjs/toolkit';

import {IProductsState} from '../products.types';
import {deleteProduct} from './deleteProduct.thunk';
import {DeleteProductResponse} from './deleteProduct.types';

export const deleteProductBuilder = (
  builder: ActionReducerMapBuilder<IProductsState>,
) => {
  builder.addCase(deleteProduct.pending, state => {
    state.loading = true;
  });
  builder.addCase(deleteProduct.rejected, state => {
    state.loading = false;
  });
  builder.addCase(
    deleteProduct.fulfilled,
    (state, action: PayloadAction<DeleteProductResponse>) => {
      state.loading = false;
      state.products = state.products.filter(
        product => product.id !== action.payload.id,
      );
    },
  );

  return builder;
};
