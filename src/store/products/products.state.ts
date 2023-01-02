import { IProductsState } from "./products.types";

export const initialState: IProductsState = {
    loading: false,
    products: [],
    current: null,
};
