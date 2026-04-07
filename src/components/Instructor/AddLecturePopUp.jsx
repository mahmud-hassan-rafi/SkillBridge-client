import { assets } from "@assets/assets";
import React, { useCallback } from "react";
import uniqId from "uniqid";

const AddLecturePopUp = ({
  courseData,
  setCourseData,
  showPopup,
  setShowPopup,
}) => {
  const handleLectureDetailsOnChange = useCallback(
    (e) =>
      setCourseData((prev) => {
        const { name, value } = e.target;
        return {
          ...prev,
          lectureDetails: {
            ...prev.lectureDetails,
            [name]: value,
          },
        };
      }),
    [setCourseData],
  );

  const addLecture = useCallback(() => {
    setCourseData((prev) => ({
      ...prev,
      chapters: prev.chapters.map((chapter) =>
        chapter.chapterId === prev.currentChapterId
          ? {
              ...chapter,
              chapterContent: [
                ...chapter.chapterContent,
                {
                  ...prev.lectureDetails,
                  lectureOrder:
                    chapter?.chapterContent?.length > 0
                      ? chapter?.chapterContent?.slice(-1)[0].lectureOrder + 1
                      : 1,
                  lectureId: uniqId(),
                },
              ],
            }
          : chapter,
      ),
    }));

    setShowPopup(false);
    setCourseData((prev) => ({
      ...prev,
      lectureDetails: {
        lectureTitle: "",
        lectureDuration: "",
        lectureUrl: "",
        isPreviewFree: false,
      },
    }));
  }, [setCourseData, setShowPopup]);

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
          <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>
          {/* lecture title */}
          <div className="mb-2">
            <p>Lecture Title</p>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-500/40 rounded py-1.5 px-2"
              value={courseData?.lectureDetails?.lectureTitle}
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
              value={courseData?.lectureDetails?.lectureDuration}
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
              value={courseData?.lectureDetails?.lectureUrl}
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
              value={courseData?.lectureDetails?.isPreviewFree}
              name="isPreviewFree"
              onChange={(event) =>
                setCourseData((prev) => ({
                  ...prev,
                  lectureDetails: {
                    ...prev.lectureDetails,
                    isPreviewFree: event.target.checked,
                  },
                }))
              }
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-400 text-white px-4
py-2 rounded"
            onClick={addLecture}
          >
            Add
          </button>

          <img
            src={assets?.cross_icon}
            alt="cross icon"
            loading="lazy"
            onClick={() => {
              setShowPopup(false);
              setCourseData((prev) => ({
                ...prev,
                lectureDetails: {
                  lectureTitle: "",
                  lectureDuration: "",
                  lectureUrl: "",
                  isPreviewFree: false,
                },
              }));
            }}
            className="absolute top-5 right-5 w-3.5 cursor-pointer"
          />
        </div>
      </div>
    )
  );
};

export default AddLecturePopUp;

// const [courseData, setCourseData] = useState({
//   courseTitle: "",
//   coursePrice: 0,
//   discount: 0,
//   image: null,
//   chapters: [],
//   currentChapterId: null,
//   lectureDetails: {
// lectureTitle: "",
// lectureDuration: "",
// lectureUrl: "",
// isPreviewFree: false,
//   },
// });
