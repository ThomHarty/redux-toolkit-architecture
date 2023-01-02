import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCreateProduct } from "./createProduct.api";
import { CreateProductRequest, CreateProductResponse } from "./createProduct.types";

export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (createProductRequest: CreateProductRequest,): Promise<CreateProductResponse> => {
        const response = await fetchCreateProduct(createProductRequest);
        return response;
    },
);
