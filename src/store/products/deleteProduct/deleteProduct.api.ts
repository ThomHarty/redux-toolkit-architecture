import { ENDPOINT } from "../../../endpoint";
import { DeleteProductRequest, DeleteProductResponse } from "./deleteProduct.types";

export const fetchDeleteProduct = async (
    deleteProductRequest: DeleteProductRequest,
): Promise<DeleteProductResponse> => {
    const response = await fetch(`${ENDPOINT}/products/${deleteProductRequest.params.id}`, {
        method: "DELETE",
    });

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    const data = await response.json();
    return data;
};
