import React, { ReactElement, useEffect } from "react";
import { View } from "react-native";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateProduct } from "../store/products";

export const UpdateProduct = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { products, loading } = useAppSelector(state => state.products);

    useEffect(() => {
        dispatch(updateProduct({
            body: {
                title: "test product",
                price: 13.5,
                description: "lorem ipsum set",
                image: "https://i.pravatar.cc",
                category: "electronic",
            },
            params: { id: 1 },
        }));
    }, []);

    console.log("update product loading: ", loading);
    console.log("products length: ", products.length);

    return <View />;
};
