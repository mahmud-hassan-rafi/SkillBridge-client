import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@pages/Student/Home";
import Loading from "@components/common/Loading";
import CourseDetails from "@pages/Student/CourseDetails";
import CoursesList from "@pages/Student/CoursesList";
import MyEnrollments from "@pages/Student/MyEnrollments";
import Player from "@pages/Student/Player";
import Dashboard from "@pages/Instructor/Dashboard";
import AddCourse from "@pages/Instructor/AddCourse";
import MyCourses from "@pages/Instructor/MyCourses";
import StudentsEnrolled from "@pages/Instructor/StudentsEnrolled";
import MainLayoutStudent from "@layouts/MainLayoutStudent";
import PageNotFound from "@pages/common/PageNotFound";
import Instructor from "@pages/Instructor/Instructor";
import Login from "@pages/Student/Login";
import Signup from "@pages/Student/Signup";
import InstructorLogin from "@pages/Instructor/InstructorLogin";
import InstructorSignup from "@pages/Instructor/InstructorSignup";
import PrivateRoutes from "@components/common/PrivateRoutes";
import { useLoadUserQuery } from "@features/auth/authApi";
import ScrollToTop from "@components/common/ScrollToTop";
import "quill/dist/quill.snow.css";

const App = () => {
  useLoadUserQuery();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayoutStudent />}>
          <Route index={true} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/course-list" element={<CoursesList />} />
          <Route path="/course-list/:input" element={<CoursesList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route
            path="/my-enrollments"
            element={
              <PrivateRoutes allowRoles={["student"]}>
                <MyEnrollments />
              </PrivateRoutes>
            }
          />
          <Route
            path="/player/:courseId"
            element={
              <PrivateRoutes allowRoles={["student"]}>
                <Player />
              </PrivateRoutes>
            }
          />
          <Route path="/loading/:path" element={<Loading />} />
        </Route>
        {/* Teacher routes ⬇ */}
        <Route path="/instructor" element={<Instructor />}>
          <Route path="login" element={<InstructorLogin />} />
          <Route path="signup" element={<InstructorSignup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>

        {/* Not Found pages */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
