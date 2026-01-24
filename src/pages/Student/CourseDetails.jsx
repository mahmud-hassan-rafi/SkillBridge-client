import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "@assets/assets";
import Footer from "@components/Student/Footer";

import YouTube from "react-youtube";
import CourseStructure from "@components/Student/CourseStructure";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const scrollToDescription = useRef();
  const scrollToVideoRef = useRef();
  const {
    allCourses,
    calculateAvarageRating,
    currency,
    calculateCourseDuration,
    calculateNoOfLectures,
  } = useAppContext();

  useEffect(() => {
    (async function fetchCourseData() {
      const findCourse = allCourses.find((course) => course._id === id);
      setCourseData(findCourse);
    })();
  }, [allCourses, id]);

  return (
    <>
      <div
        className="flex md:flex-row flex-col-reverse gap-10 relative items-center md:items-start
justify-between md:px-8 lg:px-16 xl:px-24 2xl:px-32 px-8 md:pt-20 pt-6 text-left"
      >
        {/* bg */}
        <div
          className="absolute top-0 left-0 w-full min-h-125 z-0
bg-linear-to-b from-cyan-100/70"
        ></div>

        {/* left col */}
        <div className="z-10 max-w-xl text-gray-500">
          <h1 className="md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800">
            {courseData?.courseTitle}
          </h1>
          <p
            className="pt-4 line-clamp-4 md:line-clamp-3 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData?.courseDescription,
            }}
            onClick={() =>
              scrollToDescription.current?.scrollIntoView({
                behevior: "smooth",
                block: "start",
              })
            }
          ></p>
          {/* course rating */}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateAvarageRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, idx) => (
                <img
                  className="w-3.5 h-3.5"
                  key={idx}
                  src={
                    Math.floor(calculateAvarageRating(courseData)) > idx
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData?.courseRatings.length}{" "}
              {courseData?.courseRatings.length > 1 ? "ratings" : "rating"})
            </p>
            <p>
              {courseData?.enrolledStudents.length}{" "}
              {courseData?.enrolledStudents.length > 1 ? "students" : "student"}
            </p>
          </div>
          <p className="text-sm">
            Course by{" "}
            <span className="text-blue-600 underline">Mahmud Hassan</span>
          </p>
          {/* course structure components*/}
          <CourseStructure
            setPlayerData={setPlayerData}
            courseData={courseData}
            buyedCourse={isAlreadyEnrolled}
            scrollToVideoRef={scrollToVideoRef}
          />
          {/* description section */}
          <div className="py-8 md:py-20 text-sm md:text-base">
            <h3
              className="text-xl font-semibold text-gray-800"
              ref={scrollToDescription}
            >
              Description
            </h3>
            <p
              className="pt-3 rich-text"
              dangerouslySetInnerHTML={{
                __html: courseData?.courseDescription,
              }}
            ></p>
          </div>
        </div>

        {/* right col */}
        <div
          className="max-w-106 z-10 shadow-[0_4px_15px_2px] shadow-[rgba(0,0,0,0.1)] rounded-t
md:rounded-none overflow-hidden bg-white min-w-75 sm:min-w-105"
        >
          {playerData ? (
            <YouTube
              videoId={playerData?.videoId}
              opts={{ playerVars: { autoplay: 1 } }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img
              src={courseData?.courseThumbnail}
              ref={scrollToVideoRef}
              alt=""
            />
          )}
          <div className="p-5">
            <div className="flex items-center gap-2">
              <img
                src={assets.time_left_clock_icon}
                alt="time_left_clock_icon"
              />
              <p className="font-medium">
                <span className="text-red-500">5 days</span> left to the price!
              </p>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <p className="md:text-4xl text-2xl to-gray-800 font-semibold">
                {currency}
                {(
                  courseData?.coursePrice -
                  (courseData?.discount * courseData?.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="md:text-lg text-gray-500 line-through">
                {currency}
                {courseData?.coursePrice}
              </p>
              <p className="md:text-lg text-gray-500">
                {courseData?.discount}% off!
              </p>
            </div>
            {/* ratings */}
            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="star" />
                <p>({calculateAvarageRating(courseData)})</p>
              </div>

              <div className="h-4 w-px bg-gray-500/30"></div>
              {/* total duration */}
              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="time_clock_icon" />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>

              <div className="h-4 w-px bg-gray-500/30"></div>
              {/* total lessons */}
              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="lesson_icon" />
                <p>{calculateNoOfLectures(courseData)} lessons</p>
              </div>
            </div>
            <button
              className="md:mt-6 mt-4 w-full py-3 rounded bg-blue-600
text-white font-medium"
              onClick={() =>
                isAlreadyEnrolled ? navigate("/player/" + courseData._id) : ""
              }
            >
              {isAlreadyEnrolled ? "Already Enrolled" : "Enroll now"}
            </button>
            <div className="pt-6">
              <p className="md:text-x1 text-lg font-medium text-gray-800">
                What's in the course?{" "}
              </p>
              <ul
                className="ml-4 pt-2 text-sm md:text-default list-disc
            text-gray-500"
              >
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-dn project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default React.memo(CourseDetails);
