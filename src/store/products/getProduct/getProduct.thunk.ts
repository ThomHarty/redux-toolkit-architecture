import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchGetProduct } from "./getProduct.api";
import { GetProductRequest, GetProductResponse } from "./getProduct.types";

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (getProductRequest: GetProductRequest,): Promise<GetProductResponse> => {
        const response = await fetchGetProduct(getProductRequest);
        return response;
    },
);
