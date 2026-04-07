import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@pages/Student/Home";
import CourseDetails from "@pages/Student/CourseDetails";
const CoursesList = lazy(() => import("@pages/Student/CoursesList"));
import MyEnrollments from "@pages/Student/MyEnrollments";
import Player from "@pages/Student/Player";
import Dashboard from "@pages/Instructor/Dashboard";
import AddCourse from "@pages/Instructor/AddCourse";
import MyCourses from "@pages/Instructor/MyCourses";
import StudentsEnrolled from "@pages/Instructor/StudentsEnrolled";
import MainLayoutStudent from "@layouts/MainLayoutStudent";
import PageNotFound from "@pages/common/PageNotFound";
import BecomeInstructor from "@pages/Instructor/BecomeInstructor";
import Login from "@features/auth/pages/Login";
import Signup from "@features/auth/pages/Signup";
import PrivateRoutes from "@routes/guards/PrivateRoutes";
import RootRedirect from "@routes/redirects/RootRedirect";
import InstructorLayout from "@layouts/InstructorLayout";
import BecomeInstructorOnboardingLayout from "@layouts/BecomeInstructorOnboardingLayout";
import TeachingExperienceOnboarding from "@pages/Instructor/become-instructor/onboarding/TeachingExperienceOnboarding";
import VideoExperienceOnboarding from "@pages/Instructor/become-instructor/onboarding/VideoExperienceOnboarding";
import ExistingAudienceOnboarding from "@pages/Instructor/become-instructor/onboarding/ExistingAudienceOnboarding";
import { InstructorOnBoardingContextProvider } from "@context/InstructorOnBoarding.context";
import Loading from "@components/common/Loading";
const CourseCheckout = lazy(
  () => import("@features/payment/pages/CourseCheckout"),
);
import PaymentSuccess from "@features/payment/pages/PaymentSuccess";
import InstructorNotAllowed from "./guards/NotAllowed";

const AppRoutes = ({ isLoading }) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayoutStudent />}>
        <Route index={true} element={<RootRedirect isLoading={isLoading} />} />
        <Route
          path="/home"
          element={
            <InstructorNotAllowed>
              <Home />
            </InstructorNotAllowed>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/course-list"
          element={
            <InstructorNotAllowed>
              <Suspense fallback={<Loading />}>
                <CoursesList />
              </Suspense>
            </InstructorNotAllowed>
          }
        />
        <Route
          path="/course-list/:input"
          element={
            <InstructorNotAllowed>
              <CoursesList />
            </InstructorNotAllowed>
          }
        />
        <Route
          path="/course/:id"
          element={
            <InstructorNotAllowed>
              <CourseDetails />
            </InstructorNotAllowed>
          }
        />
        <Route
          path="/course/enroll/:id"
          element={
            <PrivateRoutes allowRoles={"student"} route={"/login"}>
              <Suspense fallback={<Loading />}>
                <CourseCheckout />
              </Suspense>
            </PrivateRoutes>
          }
        />
        <Route
          path="/course/enroll/payment-success"
          element={<PaymentSuccess />}
        />
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
