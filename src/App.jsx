import React from "react";
import "react-quill/dist/quill.snow.css";
import Loading from "@components/common/Loading";
import { useLoadUserQuery } from "@features/auth/authApi";
import AppRoutes from "@routes/AppRoutes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const { isLoading, isFetching } = useLoadUserQuery();
  const loading = isLoading || isFetching;

  return !loading ? (
    <RouterProvider router={AppRoutes(loading)} />
  ) : (
    <Loading />
  );
};

export default App;
