import { ENDPOINT } from "../../../endpoint";
import { CreateProductRequest, CreateProductResponse } from "./createProduct.types";

export const fetchCreateProduct = async (
    createProductRequest: CreateProductRequest,
): Promise<CreateProductResponse> => {
    const response = await fetch(`${ENDPOINT}/products`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createProductRequest.body),
    });

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    return await response.json();
};
