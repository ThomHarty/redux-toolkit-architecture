import React, {ReactElement, useEffect} from 'react';
import {View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getProduct} from '../store/products';

export const GetProduct = (): ReactElement => {
  const dispatch = useAppDispatch();
  const {current, loading} = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(
      getProduct({
        params: {id: 1},
      }),
    );
  }, [dispatch]);

  console.log('get product loading: ', loading);
  console.log('get product: ', current);

  return <View />;
};
