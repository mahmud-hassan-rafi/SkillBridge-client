import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@pages/Student/Home";
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
import BecomeInstructor from "@pages/Instructor/BecomeInstructor";
import Login from "@pages/Student/Login";
import Signup from "@pages/Student/Signup";
import PrivateRoutes from "@components/common/PrivateRoutes";
import RootRedirect from "@utils/RootRedirect";
import InstructorLayout from "@layouts/InstructorLayout";
import BecomeInstructorOnboardingLayout from "@layouts/BecomeInstructorOnboardingLayout";
import TeachingExperienceOnboarding from "@pages/Instructor/become-instructor/onboarding/TeachingExperienceOnboarding";
import VideoExperienceOnboarding from "@pages/Instructor/become-instructor/onboarding/VideoExperienceOnboarding";
import ExistingAudienceOnboarding from "@pages/Instructor/become-instructor/onboarding/ExistingAudienceOnboarding";
import { InstructorOnBoardingContextProvider } from "@context/InstructorOnBoarding.context";
import Loading from "@components/common/Loading";

const AppRoutes = ({ isLoading }) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayoutStudent />}>
        <Route index={true} element={<RootRedirect isLoading={isLoading} />} />
        <Route path="/home" element={<Home />} />
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
      {/* become instructor */}
      <Route path="/become-instructor" element={<BecomeInstructor />} />
      <Route
        path="/become-instructor/onboarding"
        element={
          <InstructorOnBoardingContextProvider>
            <BecomeInstructorOnboardingLayout />
          </InstructorOnBoardingContextProvider>
        }
      >
        <Route
          path="teaching-experience"
          element={<TeachingExperienceOnboarding />}
        />
        <Route
          path="video-experience"
          element={<VideoExperienceOnboarding />}
        />
        <Route
          path="existing-audience"
          element={<ExistingAudienceOnboarding />}
        />
      </Route>

      {/* already instructor */}
      <Route path="/instructor" element={<InstructorLayout />}>
        <Route
          path="dashboard"
          element={
            <PrivateRoutes allowRoles={"instructor"} children={<Dashboard />} />
          }
        />
        <Route
          path="add-course"
          element={
            <PrivateRoutes allowRoles={"instructor"} children={<AddCourse />} />
          }
        />
        <Route
          path="my-courses"
          element={
            <PrivateRoutes allowRoles={"instructor"} children={<MyCourses />} />
          }
        />
        <Route
          path="student-enrolled"
          element={
            <PrivateRoutes
              allowRoles={"instructor"}
              children={<StudentsEnrolled />}
            />
          }
        />
      </Route>

      {/* Not Found pages */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
