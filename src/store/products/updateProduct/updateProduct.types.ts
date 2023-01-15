import {IProduct} from '../products.types';

export interface UpdateProductRequest {
  body: Omit<IProduct, 'id'>;
  params: {id: number};
}

export type UpdateProductResponse = IProduct;
