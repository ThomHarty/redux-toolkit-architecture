import { IProduct } from "../products.types";

export interface DeleteProductRequest {
    params: { id: number; };
};

export type DeleteProductResponse = IProduct;
