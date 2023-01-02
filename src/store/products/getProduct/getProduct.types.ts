import { IProduct } from "../products.types";

export interface GetProductRequest {
    params: {
        id: number;
    };
};


export type GetProductResponse = IProduct;
