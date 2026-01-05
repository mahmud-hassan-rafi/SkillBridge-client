import Instructor from "@pages/Instructor/Instructor";
import Home from "@pages/Student/Home";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RootRedirect = ({ isLoading }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user);

  useEffect(() => {
    if (isLoading) return;
    if (
      !user ||
      (user?.enrolledCourses.length === 0 && user?.role === "student")
    ) {
      navigate("/home");
    } else if (user?.role === "instructor") {
      navigate("/instructor");
    }
  }, [navigate, user, isLoading]);

  return <div>redirecting...</div>;
};

export default RootRedirect;
