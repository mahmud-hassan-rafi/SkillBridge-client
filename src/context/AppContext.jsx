import { dummyCourses } from "@assets/assets.js";
import { createContext, useContext, useEffect, useState } from "react";
import humanizeDuration from "humanize-duration";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const [manageAccount, setManageAccount] = useState(false);

  // fetch all courses
  useEffect(() => {
    (async function fetchAllCourses() {
      setAllCourses(dummyCourses);
    })();
  }, [setAllCourses]);

  // calculate avarage rating of a course
  function calculateAvarageRating(course) {
    if (course?.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;

    course?.courseRatings.forEach((rating) => {
      totalRating += rating?.rating;
    });
    return (totalRating / course?.courseRatings.length).toFixed(1);
  }

  // Function to calculate chapter time
  const calculateChapterTime = (chapter) => {
    const totalTime = chapter?.chapterContent?.reduce(
      (prevTotal, lecture) => (prevTotal += lecture?.lectureDuration),
      0
    );
    return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate course time
  const calculateCourseDuration = (course) => {
    const calculateChapterTime = (chapter) => {
      return chapter?.chapterContent.reduce(
        (total, lecture) => total + lecture?.lectureDuration,
        0
      );
    };

    const totalTime = course?.courseContent.reduce(
      (prevTotal, chapter) => (prevTotal += calculateChapterTime(chapter)),
      0
    );
    return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate No. of Lectures in the courses
  const calculateNoOfLectures = (course) => {
    const totalLectures = course?.courseContent?.reduce(
      (prevTotal, chapter) => {
        if (Array.isArray(chapter?.chapterContent)) {
          return (prevTotal += chapter?.chapterContent.length);
        }
      },
      0
    );
    return totalLectures;
  };

  // for capitalize name
  const capitalize = (str) => (str ? str[0].toUpperCase() + str.slice(1) : "");

  const value = {
    currency,
    allCourses,
    calculateAvarageRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    capitalize,
    manageAccount,
    setManageAccount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
