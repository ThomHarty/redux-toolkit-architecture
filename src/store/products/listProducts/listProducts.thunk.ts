import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchListProducts } from "./listProducts.api";
import { ListProductsResponse } from "./listProducts.types";

export const listProducts = createAsyncThunk(
    "product/listProducts",
    async (): Promise<ListProductsResponse> => {
        const response = await fetchListProducts();
        return response;
    },
);
