import React, { useCallback, useState } from "react";
import { assets } from "@assets/assets";
import { useAppContext } from "@hooks/ContextHook";
import Lecture from "./Lecture";
import { AnimatePresence, motion } from "framer-motion";

const Chapter = ({
  chapter,
  idx,
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
    <div className="border border-gray-300 bg-white mb-2 rounded">
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
          <AnimatePresence>
            <motion.img
              initial={{ transform: "rotate(0deg)" }}
              animate={{
                transform: openSections[idx]
                  ? "rotate(0deg)"
                  : "rotate(-90deg)",
              }}
              transition={{ duration: 0.25 }}
              loading="lazy"
              src={assets.down_arrow_icon}
              alt=""
              className="size-2.5"
            />
          </AnimatePresence>

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

      <AnimatePresence>
        {openSections[idx] && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
              {chapter?.chapterContent?.map((lecture, i) => (
                <Lecture
                  key={lecture._id || i}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Chapter);
