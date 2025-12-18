import { useAppContext } from "@context/AppContext";
import React, { useState } from "react";
import humanizeDuration from "humanize-duration";
import { assets } from "@assets/assets";
import { useNavigate } from "react-router-dom";

const CourseStructure = ({
  courseData,
  setPlayerData,
  buyedCourse,
  scrollToVideoRef,
}) => {
  const [openSections, setOpenSections] = useState({});
  const { calculateChapterTime } = useAppContext();
  const navigate = useNavigate();
  console.log("course structure components");
  // toggle sections
  const toggleSection = (idx) => {
    setOpenSections((prev) => {
      return { ...prev, [idx]: !prev[idx] };
    });
  };

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
              className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
              onClick={() => toggleSection(idx)}
            >
              {/* arrow icon and chapter title */}
              <div className="flex items-center gap-2">
                <img
                  src={assets.down_arrow_icon}
                  alt=""
                  className={`transform transition-transform duration-300 ${
                    openSections[idx] && "rotate-180 "
                  }`}
                />
                <p className="font-medium text-sm md:text-base">
                  {chapter?.chapterTitle}
                </p>
              </div>
              {/* No. of lectures and total duration */}
              <p className="text-sm md:text-base">
                {chapter?.chapterContent?.length} lectures -{" "}
                {calculateChapterTime(chapter)}
              </p>
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openSections[idx] ? "max-h-95" : "max-h-0"
              }`}
            >
              <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                {chapter?.chapterContent?.map((lecture, i) => {
                  return (
                    <li key={i} className="flex items-start gap-2 py-1">
                      <img
                        src={false ? assets.blue_tick_icon : assets.play_icon}
                        alt="play_icon"
                        className="w-4 h-4 mt-1"
                      />
                      <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-base">
                        <p>{lecture.lectureTitle}</p>
                        <div className="flex gap-2">
                          {buyedCourse ? (
                            <p
                              onClick={() => {
                                navigate("/player/" + courseData._id);
                                setPlayerData({
                                  ...lecture,
                                  chapter: idx + 1,
                                  lecture: i + 1,
                                  videoId: lecture?.lectureUrl.split("/").pop(),
                                });
                              }}
                              className="text-blue-500 cursor-pointer"
                            >
                              Watch
                            </p>
                          ) : (
                            lecture.isPreviewFree && (
                              <p
                                onClick={() => {
                                  setPlayerData({
                                    ...lecture,
                                    chapter: idx + 1,
                                    lecture: i + 1,
                                    videoId: lecture?.lectureUrl
                                      .split("/")
                                      .pop(),
                                  });
                                  scrollToVideoRef?.current?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                }}
                                className="text-blue-500 cursor-pointer"
                              >
                                Preview
                              </p>
                            )
                          )}
                          <p>
                            {humanizeDuration(
                              lecture.lectureDuration * 60 * 1000,
                              { units: ["h", "m"] }
                            )}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;
