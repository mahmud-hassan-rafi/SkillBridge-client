import React from "react";

import Loading from "@components/common/Loading";
import { useLoadUserQuery } from "@features/auth/authApi";
import ScrollToTop from "@components/common/ScrollToTop";
import "quill/dist/quill.snow.css";
import AppRoutes from "@routes/AppRoutes";

const App = () => {
  const { isLoading } = useLoadUserQuery();

  return !isLoading ? (
    <>
      <ScrollToTop />
      <AppRoutes isLoading={isLoading} />
    </>
  ) : (
    <Loading />
  );
};

export default App;
