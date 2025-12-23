import { assets } from "@assets/assets";
import AddLecturePopUp from "@components/Instructor/AddLecturePopUp";
import Quill from "quill";
import React, { useEffect, useRef, useState } from "react";
import uniqId from "uniqid";

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const [courseData, setCourseData] = useState({
    courseTitle: "",
    coursePrice: 0,
    discount: 0,
    image: null,
    chapters: [],
    currentChapterId: null,
    lectureDetails: {
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      isPreviewFree: false,
    },
  });

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    setCourseData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChapter = (action, chapterId) => {
    if (action === "add") {
      const title = prompt("Enter Chapter Name");

      if (title) {
        const newChapter = {
          chapterId: uniqId(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            courseData?.chapters?.length > 0
              ? courseData?.chapters?.slice(-1)[0]?.chapterOrder + 1
              : 1,
        };
        setCourseData((prev) => {
          return { ...prev, chapters: [...prev.chapters, newChapter] };
        });
      }
    } else if (action === "remove") {
      const filteredList = courseData?.chapters?.filter(
        (chapter) => chapter?.chapterId !== chapterId
      );
      setCourseData((prev) => {
        return { ...prev, chapters: filteredList };
      });
    } else if (action === "toggle") {
      setCourseData((prev) => {
        return {
          ...prev,
          chapters: [
            ...prev.chapters.map((chapter) =>
              chapter.chapterId === chapterId
                ? { ...chapter, collapsed: !chapter.collapsed }
                : chapter
            ),
          ],
        };
      });
    }
  };

  const handleLecture = (action, chapterId, lectureIdx) => {
    if (action === "add") {
      setCourseData((prev) => {
        return { ...prev, currentChapterId: chapterId };
      });
      setShowPopup(true);
    } else if (action === "remove") {
      setCourseData((prev) => {
        return {
          ...prev,
          chapters: [
            ...prev.chapters.map((chapter) => {
              if (chapter.chapterId === chapterId) {
                chapter.chapterContent.splice(lectureIdx, 1);
              }
              return chapter;
            }),
          ],
        };
      });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  // quill editor setup
  const calledRef = useRef(true);
  useEffect(() => {
    if (!calledRef.current) return;
    calledRef.current = false;

    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-10 pb-0">
      <form
        className="flex flex-col gap-4 max-w-md w-full text-gray-500"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-1">
          <p>Course Title</p>
          <input
            name="courseTitle"
            onChange={handleOnChange}
            value={courseData?.courseTitle}
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5
py-2 px-3 rounded border border-gray-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              onChange={handleOnChange}
              value={courseData?.coursePrice}
              name="coursePrice"
              type={"number"}
              placeholder="0"
              className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500"
              required
            />
          </div>

          <div className="flex md:flex-row flex-col items-center gap-3">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className="flex items-center gap-3">
              <img
                src={assets.file_upload_icon}
                alt=""
                className="p-3 bg-blue-500
              rounded"
              />
              <input
                type={"file"}
                id={"thumbnailImage"}
                name="image"
                onChange={(e) =>
                  setCourseData((prev) => ({
                    ...prev,
                    image: e.target.files[0],
                  }))
                }
                accept="image/*"
                hidden
              />
              {courseData?.image && (
                <img
                  className="max-h-18"
                  src={URL.createObjectURL(courseData?.image)}
                  alt=""
                />
              )}
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p>Discount %</p>
          <input
            onChange={handleOnChange}
            value={courseData?.discount}
            type={"number"}
            name="discount"
            placeholder="0"
            min={0}
            max={100}
            className="outline-none
          md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500"
            required
          />
        </div>

        {/* adding course section */}
        <div>
          {courseData?.chapters?.map((chapter, chapterIdx) => (
            <div
              key={chapterIdx}
              className="bg-white border border-gray-500/20 rounded-lg mb-4"
            >
              <div className="flex items-center justify-start gap-2 p-4 border-b border-b-gray-500/20">
                {/* added chapter */}
                <div className="flex items-center">
                  <img
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
                  src={assets.cross_icon}
                  alt="cross icon"
                  className="cursor-pointer ml-auto"
                  onClick={() => handleChapter("remove", chapter.chapterId)}
                />
              </div>
              {!chapter?.collapsed && (
                <div className="p-4">
                  {chapter?.chapterContent?.map((lecture, lectureIdx) => (
                    <div
                      key={lectureIdx}
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
                        src={assets.cross_icon}
                        alt="cross icon"
                        className="cursor-pointer ml-auto"
                        onClick={() =>
                          handleLecture("remove", chapter.chapterId, lectureIdx)
                        }
                      />
                    </div>
                  ))}
                  <div
                    className="flex justify-center w-max items-center bg-blue-100 p-2
rounded cursor-pointer"
                    onClick={() => handleLecture("add", chapter.chapterId)}
                  >
                    + Add Lectures
                  </div>
                  <AddLecturePopUp
                    courseData={courseData}
                    setCourseData={setCourseData}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                  />
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
        <button
          type="submit"
          className="bg-black text-white w-max py-2.5 px-8 rounded my-4"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
