import {createAsyncThunk} from '@reduxjs/toolkit';

import {fetchUpdateProduct} from './updateProduct.api';
import {
  UpdateProductRequest,
  UpdateProductResponse,
} from './updateProduct.types';

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (
    updateProductRequest: UpdateProductRequest,
  ): Promise<UpdateProductResponse> => {
    return await fetchUpdateProduct(updateProductRequest);
  },
);
