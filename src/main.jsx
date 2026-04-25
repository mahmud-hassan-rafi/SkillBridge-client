import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@stores/store.js";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <App />

        {window.addEventListener("load", () => {
          const preloader = document.getElementById("preloader");

          if (preloader) {
            preloader.style.display = "none";
          }
        })}
      </AppContextProvider>
    </Provider>
    <ToastContainer />
  </StrictMode>,
);
