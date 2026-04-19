import React, {
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAppContext } from "@hooks/ContextHook";
import { useParams } from "react-router-dom";
import { assets } from "@assets/assets";
import Footer from "@components/Student/Footer";

const CourseStructure = lazy(
  () => import("@components/Student/CourseStructure"),
);
import CourseEnrollmentCardSkeleton from "@skeleton/course/CourseEnrollmentCardSkeleton";
import CourseStructureSkeleton from "@skeleton/course/CourseStructureSkeleton";
import { useGetCoursesQuery } from "@features/course/courseApi";
import Loading from "@components/common/Loading";
const CourseEnrollementCard = lazy(
  () =>
    import("@components/Student/courseDetails/courseEnrollmentCard/CourseEnrollementCard"),
);

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const scrollToDescription = useRef();
  const scrollToVideoRef = useRef();
  const { calculateAvarageRating } = useAppContext();

  const { data: courses, isLoading } = useGetCoursesQuery();
  const allCourses = useMemo(() => courses?.AllCourses, [courses?.AllCourses]);

  useEffect(() => {
    (function fetchCourseData() {
      const findCourse = allCourses?.find((course) => {
        return course._id === id;
      });

      setCourseData(findCourse);
    })();
  }, [allCourses, id, isLoading]);

  if (isLoading) return <Loading />;

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
        <div className="z-10 w-full max-w-xl text-gray-500">
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
              {courseData?.enrolledStudents || 0}{" "}
              {courseData?.enrolledStudents > 1 ? "students" : "student"}
            </p>
          </div>
          <p className="text-sm">
            Course by{" "}
            <span className="text-blue-600 underline cursor-pointer">
              {courseData?.educator?.fullname &&
                Object.values(courseData?.educator?.fullname).join(" ")}
            </span>
          </p>
          {/* course structure components*/}
          <Suspense fallback={<CourseStructureSkeleton />}>
            <CourseStructure
              setPlayerData={setPlayerData}
              courseData={courseData}
              isBuyedCourse={isAlreadyEnrolled}
              scrollToVideoRef={scrollToVideoRef}
            />
          </Suspense>
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
        <Suspense fallback={<CourseEnrollmentCardSkeleton />}>
          <CourseEnrollementCard
            playerData={playerData}
            courseData={courseData}
            isAlreadyEnrolled={isAlreadyEnrolled}
            ref={scrollToVideoRef}
          />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
