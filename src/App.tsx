import React, { ReactElement } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};
