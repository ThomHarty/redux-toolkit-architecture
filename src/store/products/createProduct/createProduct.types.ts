import {IProduct} from '../products.types';

export interface CreateProductRequest {
  body: Omit<IProduct, 'id'>;
}

export type CreateProductResponse = IProduct;
