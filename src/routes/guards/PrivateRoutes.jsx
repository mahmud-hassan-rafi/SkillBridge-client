import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../../components/common/Loading";

const PrivateRoutes = ({ children, allowRoles, route }) => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  // Wait for auth check to complete
  if (!auth?.authChecked) {
    return <Loading />;
  }
  if (
    auth?.isAuthenticated &&
    allowRoles &&
    !allowRoles.includes(auth?.user?.role)
  ) {
    return <Navigate to={`/`} replace state={{ from: location }} />;
  }
  // If authenticated, render provided children (when used as wrapper)
  if (auth.isAuthenticated) return children ? children : <Outlet />;
  // ${route || "/"}
  // Not authenticated -> redirect to provided route (or root)
  return <Navigate to={`${route || "/"}`} replace state={{ from: location }} />;
};

export default PrivateRoutes;
