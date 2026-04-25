import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

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
import InstructorLayout from "@layouts/InstructorLayout";
import BecomeInstructorOnboardingLayout from "@layouts/BecomeInstructorOnboardingLayout";

import PageNotFound from "@pages/common/PageNotFound";
import BecomeInstructor from "@pages/Instructor/BecomeInstructor";

import Login from "@features/auth/pages/Login";
import Signup from "@features/auth/pages/Signup";

import PrivateRoutes from "@routes/guards/PrivateRoutes";
import RootRedirect from "@routes/redirects/RootRedirect";
import InstructorNotAllowed from "@routes/guards/NotAllowed";

import TeachingExperienceOnboarding from "@pages/Instructor/become-instructor/onboarding/TeachingExperienceOnboarding";
import VideoExperienceOnboarding from "@pages/Instructor/become-instructor/onboarding/VideoExperienceOnboarding";
import ExistingAudienceOnboarding from "@pages/Instructor/become-instructor/onboarding/ExistingAudienceOnboarding";

import { InstructorOnBoardingContextProvider } from "@context/InstructorOnBoarding.context";

import Loading from "@components/common/Loading";

const CourseCheckout = lazy(
  () => import("@features/payment/pages/CourseCheckout"),
);

import PaymentSuccess from "@features/payment/pages/PaymentSuccess";
import { CourseCheckoutLoader } from "@features/payment/pages/CourseCheckout";

const suspenseWrap = (component) => (
  <Suspense fallback={<Loading />}>{component}</Suspense>
);

const router = (isLoading) =>
  createBrowserRouter([
    {
      path: "/",
      element: <MainLayoutStudent />,
      children: [
        {
          index: true,
          element: <RootRedirect isLoading={isLoading} />,
        },
        {
          path: "home",
          element: (
            <InstructorNotAllowed>
              <Home />
            </InstructorNotAllowed>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "course-list",
          element: (
            <InstructorNotAllowed>
              {suspenseWrap(<CoursesList />)}
            </InstructorNotAllowed>
          ),
        },
        {
          path: "course-list/:input",
          element: (
            <InstructorNotAllowed>
              {suspenseWrap(<CoursesList />)}
            </InstructorNotAllowed>
          ),
        },
        {
          path: "course/:id",
          element: (
            <InstructorNotAllowed>
              <CourseDetails />
            </InstructorNotAllowed>
          ),
        },
        {
          path: "course/enroll/:id",
          loader: CourseCheckoutLoader,
          element: (
            <PrivateRoutes allowRoles={["student"]} route="/login">
              {suspenseWrap(<CourseCheckout />)}
            </PrivateRoutes>
          ),
        },
        {
          path: "course/enroll/payment-success",
          element: <PaymentSuccess />,
        },
        {
          path: "my-enrollments",
          element: (
            <PrivateRoutes allowRoles={["student"]}>
              <MyEnrollments />
            </PrivateRoutes>
          ),
        },
        {
          path: "player/:courseId",
          element: (
            <PrivateRoutes allowRoles={["student"]}>
              <Player />
            </PrivateRoutes>
          ),
        },
        {
          path: "loading/:path",
          element: <Loading />,
        },
      ],
    },

    {
      path: "/become-instructor",
      element: <BecomeInstructor />,
    },

    {
      path: "/become-instructor/onboarding",
      element: (
        <InstructorOnBoardingContextProvider>
          <BecomeInstructorOnboardingLayout />
        </InstructorOnBoardingContextProvider>
      ),
      children: [
        {
          path: "teaching-experience",
          element: <TeachingExperienceOnboarding />,
        },
        {
          path: "video-experience",
          element: <VideoExperienceOnboarding />,
        },
        {
          path: "existing-audience",
          element: <ExistingAudienceOnboarding />,
        },
      ],
    },

    {
      path: "/instructor",
      element: <InstructorLayout />,
      children: [
        {
          path: "dashboard",
          element: (
            <PrivateRoutes allowRoles={["instructor"]}>
              <Dashboard />
            </PrivateRoutes>
          ),
        },
        {
          path: "add-course",
          element: (
            <PrivateRoutes allowRoles={["instructor"]}>
              <AddCourse />
            </PrivateRoutes>
          ),
        },
        {
          path: "my-courses",
          element: (
            <PrivateRoutes allowRoles={["instructor"]}>
              <MyCourses />
            </PrivateRoutes>
          ),
        },
        {
          path: "student-enrolled",
          element: (
            <PrivateRoutes allowRoles={["instructor"]}>
              <StudentsEnrolled />
            </PrivateRoutes>
          ),
        },
      ],
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

export default router;
