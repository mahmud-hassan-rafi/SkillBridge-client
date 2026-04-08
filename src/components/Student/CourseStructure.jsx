import { useAppContext } from "@context/AppContext";
import React, { useCallback, useState } from "react";
import { assets } from "@assets/assets";
import Lecture from "./courseDetails/courseStructure/Lecture";
import uniqid from "uniqid";

const CourseStructure = ({
  courseData,
  setPlayerData,
  isBuyedCourse,
  scrollToVideoRef,
}) => {
  const [openSections, setOpenSections] = useState({});
  const { calculateChapterTime } = useAppContext();

  // toggle sections
  const toggleSection = useCallback(
    (idx) => {
      setOpenSections((prev) => {
        return { ...prev, [idx]: !prev[idx] };
      });
    },
    [setOpenSections],
  );

  return (
    <div className="pt-8 text-gray-800">
      <h2 className="text-xl font-semibold">Course Structure</h2>
      <div className="pt-5">
        {courseData?.courseContent?.map((chapter, idx) => (
          <div
            key={idx}
            className="border border-gray-300 bg-white mb-2 rounded"
          >
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer select-none w-full"
              onClick={() => toggleSection(idx)}
            >
              {/* arrow icon and chapter title */}
              <div
                className={`flex items-center  ${
                  !openSections[idx] ? "w-2/3 gap-2" : "w-full gap-3"
                } `}
              >
                <img
                  loading="lazy"
                  src={assets.down_arrow_icon}
                  alt=""
                  className={`transform transition-transform duration-300 ${
                    openSections[idx] && "rotate-180 "
                  }`}
                />
                <p
                  className={`font-medium text-sm md:text-base ${
                    !openSections[idx] ? "line-clamp-1" : "line-clamp-2"
                  }`}
                >
                  {chapter?.chapterTitle}
                </p>
              </div>
              {/* No. of lectures and total duration */}
              {!openSections[idx] && (
                <p className="text-sm md:text-base text-left truncate">
                  {chapter?.chapterContent?.length} lectures -{" "}
                  {calculateChapterTime(chapter)}
                </p>
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openSections[idx] ? "max-h-95" : "max-h-0"
              }`}
            >
              <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                {chapter?.chapterContent?.map((lecture, i) => (
                  <Lecture
                    key={uniqid()}
                    lecture={lecture}
                    isBuyedCourse={isBuyedCourse}
                    setPlayerData={setPlayerData}
                    scrollToVideoRef={scrollToVideoRef}
                    courseData={courseData}
                    idx={idx}
                    i={i}
                  />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CourseStructure);
