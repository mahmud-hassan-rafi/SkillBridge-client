import {
  AppContext,
  CourseContext,
  InstructorOnBoardingContext,
} from "@context/Context";
import { useContext } from "react";

export const useAppContext = () => useContext(AppContext);

export const useCourseContext = () => useContext(CourseContext);

export const useInstructorOnBoardingContext = () =>
  useContext(InstructorOnBoardingContext);
