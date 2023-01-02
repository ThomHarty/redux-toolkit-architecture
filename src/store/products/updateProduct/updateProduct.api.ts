import { ENDPOINT } from "../../../endpoint";
import { UpdateProductRequest, UpdateProductResponse } from "./updateProduct.types";

export const fetchUpdateProduct = async (
    updateProductRequest: UpdateProductRequest,
): Promise<UpdateProductResponse> => {
    const response = await fetch(`${ENDPOINT}/products/${updateProductRequest.params.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateProductRequest.body),
    });

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    return await response.json();
};
