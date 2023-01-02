import { ENDPOINT } from "../../../endpoint";
import { ListProductsResponse } from "./listProducts.types";

export const fetchListProducts = async (): Promise<ListProductsResponse> => {
    const response = await fetch(`${ENDPOINT}/products`);

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    return await response.json();
};
