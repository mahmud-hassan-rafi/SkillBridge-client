import { assets } from "@assets/assets";
import { lectureSchema } from "@utils/factoryFunction";
import { errorNotify } from "@utils/toast-notify/toastify";
import React, { useCallback } from "react";

const AddLecturePopUp = ({
  lecture,
  setLecture,
  showPopup,
  setShowPopup,
  setCourseData,
}) => {
  const handleLectureDetailsOnChange = useCallback(
    (e) =>
      setLecture((prev) => {
        const { name, value } = e.target;
        return {
          ...prev,
          [name]: value,
        };
      }),
    [setLecture],
  );

  const addLecture = useCallback(
    (e) => {
      e.preventDefault();
      if (!lecture?.lectureTitle)
        return errorNotify("Lecture title is required");
      if (!lecture?.lectureDuration || lecture?.lectureDuration <= 0)
        return errorNotify("Lecture duration must be greater than 0");
      if (!lecture?.lectureUrl) return errorNotify("Lecture URL is required");

      setCourseData((prev) => ({
        ...prev,
        courseContent: prev.courseContent.map((chapter) =>
          chapter.chapterId === lecture.currentChapterId
            ? {
                ...chapter,
                chapterContent: [
                  ...chapter.chapterContent,
                  {
                    ...lecture,
                    lectureOrder:
                      chapter?.chapterContent?.length > 0
                        ? chapter?.chapterContent?.slice(-1)[0].lectureOrder + 1
                        : 1,
                  },
                ],
              }
            : chapter,
        ),
      }));

      setShowPopup(false);
      setLecture(lectureSchema());
    },
    [setShowPopup, lecture, setLecture, setCourseData],
  );

  return (
    showPopup && (
      <div
        className="fixed inset-0 flex items-center justify-center
bg-gray-800/40 bg-opacity-50 rounded-lg"
        aria-modal={"true"}
      >
        <div
          className="bg-white text-gray-700 p-4 rounded relative w-full
max-w-80"
        >
          <form onSubmit={addLecture}>
            <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>
            {/* lecture title */}
            <div className="mb-2">
              <p>Lecture Title</p>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-500/40 rounded py-1.5 px-2"
                value={lecture?.lectureTitle}
                name="lectureTitle"
                onChange={handleLectureDetailsOnChange}
              />
            </div>
            {/* lecture duration */}
            <div className="mb-2">
              <p>Duration (minutes)</p>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-500/40 rounded py-1.5 px-2"
                value={lecture?.lectureDuration}
                name="lectureDuration"
                onChange={handleLectureDetailsOnChange}
              />
            </div>
            {/* lecture url */}
            <div className="mb-2">
              <p>Lecture URL</p>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-500/40 rounded py-1.5 px-2"
                value={lecture?.lectureUrl}
                name="lectureUrl"
                onChange={handleLectureDetailsOnChange}
              />
            </div>

            {/* is preview free */}
            <div className="mb-2 flex items-center gap-2">
              <p>Is Preview Free?</p>
              <input
                type="checkbox"
                className="mt-0.5 scale-125"
                value={lecture?.isPreviewFree}
                name="isPreviewFree"
                onChange={(event) =>
                  setLecture((prev) => ({
                    ...prev,
                    isPreviewFree: event.target.checked,
                  }))
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white px-4
py-2 rounded"
            >
              Add
            </button>
          </form>

          <img
            src={assets?.cross_icon}
            alt="cross icon"
            loading="lazy"
            onClick={() => {
              setShowPopup(false);
              setLecture(lectureSchema());
            }}
            className="absolute top-5 right-5 w-3.5 cursor-pointer"
          />
        </div>
      </div>
    )
  );
};

export default React.memo(AddLecturePopUp);
