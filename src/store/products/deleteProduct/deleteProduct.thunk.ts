import {createAsyncThunk} from '@reduxjs/toolkit';

import {fetchDeleteProduct} from './deleteProduct.api';
import {
  DeleteProductRequest,
  DeleteProductResponse,
} from './deleteProduct.types';

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (
    deleteProductRequest: DeleteProductRequest,
  ): Promise<DeleteProductResponse> => {
    return await fetchDeleteProduct(deleteProductRequest);
  },
);
