import React, { ReactElement } from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import { ListProducts } from "./components/ListProducts";
import { GetProduct } from "./components/GetProduct";

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      {/* <ListProducts /> */}
      <GetProduct />
    </Provider>
  );
};
