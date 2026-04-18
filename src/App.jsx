import React from "react";
import "react-quill/dist/quill.snow.css";
import Loading from "@components/common/Loading";
import { useLoadUserQuery } from "@features/auth/authApi";
import ScrollToTop from "@components/common/ScrollToTop";
import AppRoutes from "@routes/AppRoutes";

const App = () => {
  const { isLoading, isFetching } = useLoadUserQuery();
  const loading = isLoading || isFetching;

  return !loading ? (
    <>
      <ScrollToTop />
      {/* pass the combined loading flag down so RootRedirect can also guard */}
      <AppRoutes isLoading={loading} />
    </>
  ) : (
    <Loading />
  );
};

export default App;
