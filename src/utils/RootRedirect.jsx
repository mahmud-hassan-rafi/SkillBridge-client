import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RootRedirect = ({ isLoading }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user);

  useEffect(() => {
    // don't redirect while the current user fetch is in progress
    if (isLoading) return;

    // if we have a real user object, send them to the correct landing page
    if (user) {
      navigate(user.role === "student" ? "/home" : "/instructor/dashboard");
    } else {
      // no user means guest, go to student home by default
      navigate("/home");
    }
  }, [navigate, user, isLoading]);

  return <div>redirecting...</div>;
};

export default RootRedirect;
