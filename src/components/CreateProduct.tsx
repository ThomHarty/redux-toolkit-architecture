import React, {ReactElement, useEffect} from 'react';
import {View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../store/hooks';
import {createProduct} from '../store/products';

export const CreateProduct = (): ReactElement => {
  const dispatch = useAppDispatch();
  const {products, loading} = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(
      createProduct({
        body: {
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic',
        },
      }),
    );
  }, [dispatch]);

  console.log('create product loading: ', loading);
  console.log('products length: ', products.length);

  return <View />;
};
