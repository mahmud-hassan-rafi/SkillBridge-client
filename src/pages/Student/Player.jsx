import CourseStructure from "@components/Student/CourseStructure";
import Footer from "@components/Student/Footer";
import Rating from "@components/Student/Rating";
import { useAppContext } from "@hooks/ContextHook";
import React, { useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Player = () => {
  const { courseId } = useParams();
  const [playerData, setPlayerData] = useState(null);
  const { allCourses } = useAppContext();
  const scrollToVideoRef = useRef();

  const courseData = useMemo(() => {
    const course = allCourses?.find((course) => course._id === courseId);
    return course;
  }, [courseId, allCourses]);

  return (
    <>
      <div className="min-h-[89vh] p-4 sm:p-10 flex flex-col-reverse justify-end md:grid md:grid-cols-2 md:gap-10 gap-4 ">
        {/* left cols */}
        <div>
          <CourseStructure
            courseData={courseData}
            setPlayerData={setPlayerData}
            buyedCourse={true}
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
                iframeClassName="w-full aspect-video h-auto"
              />

              {courseData && (
                <div className="flex justify-between items-center mt-1">
                  <p>
                    {playerData?.chapter}.{playerData?.lecture}{" "}
                    {playerData?.lectureTitle}
                  </p>
                  <button className="text-blue-600 ">
                    {false ? "Completed" : "Mark Complete"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <img
              src={courseData?.courseThumbnail}
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
