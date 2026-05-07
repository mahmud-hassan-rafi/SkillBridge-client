import { AppContextProvider } from "@context/AppContext";
import { NavbarContextProvider } from "@context/NavbarContext";
import { store } from "@stores/store";
import React from "react";
import { Provider } from "react-redux";

const ContextProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <NavbarContextProvider>{children}</NavbarContextProvider>
      </AppContextProvider>
    </Provider>
  );
};

export default ContextProvider;
