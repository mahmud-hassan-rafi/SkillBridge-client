import { assets } from "@assets/assets";
import React from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import { FaLock } from "react-icons/fa6";

const Lecture = ({
  lecture,
  isBuyedCourse,
  setPlayerData,
  scrollToVideoRef,
  courseData,
  idx,
  i,
}) => {
  const navigate = useNavigate();
  return (
    <li className="flex items-center gap-3 py-1.5">
      {lecture?.isPreviewFree || isBuyedCourse ? (
        <img
          loading="lazy"
          src={false ? assets.blue_tick_icon : assets.play_icon}
          alt="play_icon"
          className="w-4 h-4"
        />
      ) : (
        <FaLock className="size-4 text-gray-600/85" />
      )}
      <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-base">
        <p>{lecture.lectureTitle}</p>
        <div className="flex gap-2">
          {isBuyedCourse ? (
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
            lecture?.isPreviewFree && (
              <p
                onClick={() => {
                  setPlayerData({
                    ...lecture,
                    chapter: idx + 1,
                    lecture: i + 1,
                    videoId: lecture?.lectureUrl.split("/").pop(),
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
            {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
              units: ["h", "m"],
            })}
          </p>
        </div>
      </div>
    </li>
  );
};

export default React.memo(Lecture);
