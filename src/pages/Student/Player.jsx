import Loading from "@components/common/Loading";
import CourseStructure from "@components/Student/CourseStructure";
import Footer from "@components/Student/Footer";
import Rating from "@components/Student/Rating";
import { useGetCoursesQuery } from "@features/course/courseApi";
import { useIsEnrolledQuery } from "@features/enrollement/enrollmentApi";
import { useAppContext } from "@hooks/ContextHook";
import { errorNotify } from "@utils/toast-notify/toastify";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Player = () => {
  const { courseId } = useParams();
  const [playerData, setPlayerData] = useState(null);
  const { data: courses, isLoading } = useGetCoursesQuery();
  const allCourses = structuredClone(courses?.AllCourses);
  const { data: isBuyedCourse, isLoading: isEnrolledCheckingTime } =
    useIsEnrolledQuery(courseId) || false;
  const navigate = useNavigate();
  const { isCompletedLecture, setIsCompletedLecture } = useAppContext();
  const scrollToVideoRef = useRef();

  const courseData = useMemo(() => {
    const course = allCourses?.find((course) => course._id === courseId);
    return course;
  }, [courseId, allCourses]);

  useEffect(() => {
    if (!isBuyedCourse?.isEnrolled) {
      navigate(`/course/${courseId}`);
      errorNotify("You have to enroll the course to access the player");
    }
  }, [navigate, isBuyedCourse, courseId]);

  if (isLoading || isEnrolledCheckingTime) return <Loading />;
  console.log(isBuyedCourse);

  return (
    <>
      <div className="min-h-[89vh] p-4 sm:p-10 flex flex-col-reverse justify-end md:grid md:grid-cols-2 md:gap-10 gap-4 ">
        {/* left cols */}
        <div>
          <CourseStructure
            courseData={courseData}
            setPlayerData={setPlayerData}
            isBuyedCourse={isBuyedCourse?.isEnrolled || false}
            scrollToVideoRef={scrollToVideoRef}
          />
          <div className="flex items-center gap-2 py-3 mt-10">
            <h1 className="text-xl font-bold">Rate this Courses: </h1>
            <Rating initialState={0} />
          </div>
        </div>

        {/* right cols */}
        <div className="md:mt-20">
          {playerData ? (
            <div>
              <YouTube
                videoId={playerData?.videoId}
                opts={{ playerVars: { autoplay: 1 } }}
                iframeClassName="w-full aspect-video h-auto"
              />

              {courseData && (
                <div className="flex justify-between items-center mt-1">
                  <p>
                    {playerData?.chapter}.{playerData?.lecture}{" "}
                    {playerData?.lectureTitle}
                  </p>
                  <button
                    onClick={() => setIsCompletedLecture((prev) => !prev)}
                    className="text-blue-600 "
                  >
                    {isCompletedLecture ? "Completed" : "Mark Complete"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <img
              src={courseData?.courseThumbnail?.url}
              alt=""
              ref={scrollToVideoRef}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Player;
