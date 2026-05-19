import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import ContextProvider from "@providers/ContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />

      {window.addEventListener("load", () => {
        const preloader = document.getElementById("preloader");

        if (preloader) {
          preloader.style.display = "none";
        }
      })}
    </ContextProvider>
    <ToastContainer />
  </StrictMode>,
);
