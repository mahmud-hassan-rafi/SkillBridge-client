import { assets } from "@assets/assets";
import Footer from "@components/Student/Footer";
import CourseCard from "@components/Student/CourseCard";
import Searchbar from "@components/Student/Searchbar";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useGetCoursesQuery } from "@features/course/courseApi";
import Loading from "@components/common/Loading";

const CoursesList = () => {
  const navigate = useNavigate();
  const { input } = useParams();
  const { data: courses, isLoading } = useGetCoursesQuery();
  const allCourses = useMemo(
    () => courses?.AllCourses || [],
    [courses?.AllCourses],
  );

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isClickOnClose, setIsClickOnClose] = useState(false);

  useEffect(() => {
    (() => {
      if (allCourses && allCourses.length > 0) {
        const tempCourses = allCourses.slice();

        input
          ? setFilteredCourses(
              tempCourses.filter((course) =>
                course.courseTitle.toLowerCase().includes(input.toLowerCase()),
              ),
            )
          : setFilteredCourses(tempCourses);
      }
    })();
  }, [allCourses, input]);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="relative md:px-12 lg:px-24 xl:px-36 px-8 pt-8 text-left">
        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-[25%_60%] lg:grid-cols-[25%_50%] md:justify-between gap-6  w-full">
          <div>
            <h1 className="text-home-heading-small font-semibold text-gray-800">
              Course List
            </h1>
            <p className="text-gray-500">
              <Link
                to="/"
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Home
              </Link>{" "}
              / <span>Course List</span>
            </p>
          </div>
          <Searchbar
            data={input}
            isClickOnClose={isClickOnClose}
            setIsClickOnClose={setIsClickOnClose}
            className="w-1/3"
          />
        </div>
        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600">
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              alt=""
              className="cursor-pointer"
              onClick={() => {
                navigate("/course-list");
                setIsClickOnClose(true);
              }}
            />
          </div>
        )}
        <div className="grid px-2 md:px-0 md:my-16 my-10 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCourses?.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))
          ) : (
            <center className="text-gray-800/80">No course found</center>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
