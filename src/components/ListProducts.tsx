import React, { ReactElement, useEffect } from "react";
import { View } from "react-native";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { listProducts } from "../store/products";

export const ListProducts = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state.products);

    useEffect(() => {
        dispatch(listProducts());
    }, []);

    console.log(products);

    return <View />;
};
