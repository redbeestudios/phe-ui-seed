import React from "react";
import configureStore from "./app/redux/store/configureStore";
import { Provider } from "react-redux";
import Layout from "./app/components/Layout/Layout";

export default function Root(props) {
  const store = configureStore({});
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
