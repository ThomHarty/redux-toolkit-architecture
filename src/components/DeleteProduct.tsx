import React, { ReactElement, useEffect } from "react";
import { View } from "react-native";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteProduct, listProducts } from "../store/products";

export const DeleteProduct = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { products, loading } = useAppSelector(state => state.products);

    useEffect(() => {
        dispatch(listProducts());
    }, []);

    useEffect(() => {
        if(products.length === 20) {
            dispatch(deleteProduct({
                params: { id: 1 },
            }));
        };
    }, [products.length]);

    console.log("delete product loading: ", loading);
    console.log("list products length: ", products.length);

    return <View />;
};
