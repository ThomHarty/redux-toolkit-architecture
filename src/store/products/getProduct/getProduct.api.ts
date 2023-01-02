import { ENDPOINT } from "../../../endpoint";
import { GetProductRequest, GetProductResponse } from "./getProduct.types";

export const fetchGetProduct = async (
    getProductRequest: GetProductRequest,
): Promise<GetProductResponse> => {
    const response = await fetch(`${ENDPOINT}/products/${getProductRequest.params.id}`);

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    const data = await response.json();
    return data;
};
