import { assets } from "@assets/assets";
import { chapterSchema } from "@utils/factoryFunction";
import React from "react";
import uniqId from "uniqid";

const AddChapter = ({
  courseData,
  setCourseData,
  setLecture,
  setShowPopup,
}) => {
  const handleChapter = (action, chapterId) => {
    if (action === "add") {
      const title = prompt("Enter Chapter Name");

      if (title) {
        setCourseData((prev) => ({
          ...prev,
          courseContent: [
            ...prev.courseContent,
            {
              ...chapterSchema(),
              chapterTitle: title,
              chapterOrder:
                courseData?.courseContent?.length > 0
                  ? courseData?.courseContent?.slice(-1)[0]?.chapterOrder + 1
                  : 1,
            },
          ],
        }));
      }
    } else if (action === "remove") {
      const filteredList = courseData?.courseContent?.filter(
        (chapter) => chapter?.chapterId !== chapterId,
      );
      setCourseData((prev) => {
        return { ...prev, courseContent: [...filteredList] };
      });
    } else if (action === "toggle") {
      setCourseData((prev) => {
        return {
          ...prev,
          courseContent: [
            ...prev.courseContent.map((chapter) =>
              chapter.chapterId === chapterId
                ? { ...chapter, collapsed: !chapter.collapsed }
                : chapter,
            ),
          ],
        };
      });
    }
  };

  const handleLecture = (action, chapterId, lectureId) => {
    if (action === "add") {
      setLecture((prev) => {
        return { ...prev, currentChapterId: chapterId };
      });
      setShowPopup(true);
    } else if (action === "remove") {
      setCourseData((prev) => {
        return {
          ...prev,
          courseContent: prev.courseContent.map((chapter) => ({
            ...chapter,
            chapterContent: chapter.chapterContent.filter(
              (lecture) => lecture.lectureId !== lectureId,
            ),
          })),
        };
      });
    }
  };

  return (
    <div>
      {courseData?.courseContent?.map((chapter, chapterIdx) => (
        <div
          key={uniqId()}
          className="bg-white border border-gray-500/20 rounded-lg mb-4"
        >
          <div className="flex items-center justify-start gap-2 p-4 border-b border-b-gray-500/20">
            {/* added chapter */}
            <div className="flex items-center">
              <img
                loading="lazy"
                // toggle icon
                src={assets.dropdown_icon}
                width={14}
                alt=""
                className={`mr-2 cursor-pointer transition-all ${
                  chapter?.collapsed && "-rotate-90"
                }`}
                onClick={() => handleChapter("toggle", chapter.chapterId)}
              />
              <span className="font-semibold text-sm md:text-base truncate">
                {chapterIdx + 1}. {chapter?.chapterTitle}
              </span>
            </div>
            <span className="text-gray-500 text-sm md:text-base truncate">
              ({chapter?.chapterContent?.length} Lectures)
            </span>
            <img
              loading="lazy"
              src={assets.cross_icon}
              alt="cross icon"
              className="cursor-pointer ml-auto"
              onClick={() => handleChapter("remove", chapter.chapterId)}
            />
          </div>
          {!chapter?.collapsed && (
            <div className="p-4">
              {/* lecture content */}
              {chapter?.chapterContent?.map((lecture, lectureIdx) => (
                <div
                  key={uniqId()}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {lectureIdx + 1}. {lecture.lectureTitle} -{" "}
                    {lecture.lectureDuration} mins -{" "}
                    <a
                      href={lecture.lectureurl}
                      target="_blank"
                      className="text-blue-500"
                    >
                      Link
                    </a>{" "}
                    - {lecture.isPreviewFree ? "Free Preview" : "Paid"}
                  </span>
                  <img
                    loading="lazy"
                    src={assets.cross_icon}
                    alt="cross icon"
                    className="cursor-pointer ml-auto"
                    onClick={() => {
                      handleLecture(
                        "remove",
                        chapter.chapterId,
                        lecture.lectureId,
                      );
                    }}
                  />
                </div>
              ))}
              <div
                className="flex justify-center w-max items-center bg-blue-100 p-2
rounded cursor-pointer"
                onClick={() => {
                  handleLecture("add", chapter.chapterId);
                }}
              >
                + Add Lectures
              </div>
            </div>
          )}
        </div>
      ))}
      <div
        className="flex justify-center items-center bg-blue-100 p-2
rounded-1g cursor-pointer"
        onClick={() => handleChapter("add")}
      >
        + Add Chapter
      </div>
    </div>
  );
};

export default React.memo(AddChapter);
