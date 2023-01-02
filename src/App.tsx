import React, { ReactElement } from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import { ListProducts } from "./components/ListProducts";
import { GetProduct } from "./components/GetProduct";
import { CreateProduct } from "./components/CreateProduct";
import { UpdateProduct } from "./components/UpdateProduct";
import { DeleteProduct } from "./components/DeleteProduct";

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      {/* <ListProducts /> */}
      {/* <GetProduct /> */}
      {/* <CreateProduct /> */}
      {/* <UpdateProduct /> */}
      <DeleteProduct />
    </Provider>
  );
};
