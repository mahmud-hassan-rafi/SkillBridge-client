import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function InstructorNotAllowed({ children }) {
  const user = useSelector((state) => state.auth?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "instructor") {
      navigate("/instructor/dashboard", { replace: true });
    }
  }, [user, navigate]);

  return <>{children}</>;
}

export default InstructorNotAllowed;
