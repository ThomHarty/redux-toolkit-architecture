import React, {ReactElement, useEffect} from 'react';
import {View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../store/hooks';
import {listProducts} from '../store/products';

export const ListProducts = (): ReactElement => {
  const dispatch = useAppDispatch();
  const {products, loading} = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log('list products loading: ', loading);
  console.log('list products: ', products);

  return <View />;
};
