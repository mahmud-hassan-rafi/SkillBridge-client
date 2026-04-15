import React, { useEffect, useMemo, useState } from "react";
import { assets } from "@assets/assets";
import AddChapter from "@components/Instructor/addCourse/AddChapter";
import {
  chapterSchema,
  courseSchema,
  lectureSchema,
} from "@utils/factoryFunction";
import AddLecturePopUp from "@components/Instructor/addCourse/AddLecturePopUp";
import ReactQuill from "react-quill";
import { useCreateCourseMutation } from "@features/course/courseApi";
import { errorNotify, successNotify } from "@utils/toast-notify/toastify";
import { validateCourse } from "@utils/validateCourse";

const AddCourse = () => {
  const [createCourse, { isLoading }] = useCreateCourseMutation();

  const courseDraft = JSON.parse(localStorage.getItem("courseDraft"));
  const [courseData, setCourseData] = useState(courseDraft || courseSchema());
  const [chapterData, setChapterData] = useState(chapterSchema());
  const [lecture, setLecture] = useState(lectureSchema());
  const [showPopup, setShowPopup] = useState(false);

  // quill editor moduels
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["link", "clean"],
      ],
    }),
    [],
  );

  // quill editor formats
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "link",
  ];

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    setCourseData((prev) => {
      return {
        ...prev,
        [name]:
          value === ""
            ? ""
            : Number.isNaN(Number(value))
              ? value
              : Number(value),
      };
    });
  };
  const handleDescriptionChange = (html) => {
    setCourseData((prev) => ({
      ...prev,
      courseDescription: html,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateCourse(courseData);

    if (validationError) {
      return errorNotify(validationError);
    }

    const formData = new FormData();

    // handleFormData(formData, courseData);
    formData.append("courseTitle", courseData?.courseTitle);
    formData.append("courseDescription", courseData?.courseDescription);
    formData.append("coursePrice", courseData?.coursePrice);
    formData.append("discount", courseData?.discount);
    formData.append("courseThumbnail", courseData?.courseThumbnail);
    formData.append("courseContent", JSON.stringify(courseData?.courseContent));

    try {
      await createCourse(formData).unwrap();

      successNotify("Course created successfully");
      setCourseData(courseSchema());
    } catch (error) {
      errorNotify(error?.data?.message || error?.message);
    }
  };

  // courseData saving to localStorage with debounce method
  useEffect(() => {
    const timerId = setTimeout(() => {
      localStorage.setItem(
        "courseDraft",
        JSON.stringify({
          ...courseData,
          courseThumbnail: null,
        }),
      );
    }, 800);

    return () => clearTimeout(timerId);
  }, [courseData]);

  return (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-10 pb-0">
      <form
        className="flex flex-col gap-4 max-w-md w-full text-gray-500"
        onSubmit={handleFormSubmit}
      >
        {/* course title */}
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
        {/* course description */}
        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <ReactQuill
            theme="snow"
            formats={formats}
            modules={modules}
            value={courseData?.courseDescription}
            onChange={handleDescriptionChange}
            placeholder="Write course description..."
            className="bg-white text-base"
          />
        </div>

        {/* course price and thumbnail */}
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
            />
          </div>

          <div className="flex md:flex-row flex-col items-center gap-3">
            <p>Course Thumbnail</p>
            <label
              htmlFor="courseThumbnail"
              className="flex items-center gap-3"
            >
              <img
                loading="lazy"
                src={assets.file_upload_icon}
                alt=""
                className="p-3 bg-blue-500
              rounded"
              />
              <input
                type={"file"}
                id={"courseThumbnail"}
                name="courseThumbnail"
                onChange={(e) => {
                  setCourseData((prev) => ({
                    ...prev,
                    courseThumbnail: e.target.files[0],
                  }));
                }}
                accept="image/*"
                hidden
              />
              {courseData?.courseThumbnail && (
                <img
                  loading="lazy"
                  className="max-h-18"
                  src={URL.createObjectURL(courseData?.courseThumbnail)}
                  alt=""
                />
              )}
            </label>
          </div>
        </div>

        {/* discount */}
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
          />
        </div>

        {/* adding chapter section */}
        <AddChapter
          courseData={courseData}
          setCourseData={setCourseData}
          chapterData={chapterData}
          setChapterData={setChapterData}
          setLecture={setLecture}
          setShowPopup={setShowPopup}
        />

        {/* rendering added chapters */}
        <div className="flex w-full justify-between items-center">
          <button
            type="submit"
            className="bg-black text-sm text-white w-30 h-10 rounded my-4"
          >
            {isLoading ? "CREATING..." : "CREATE"}
          </button>
          <div
            onClick={() => setCourseData(courseSchema())}
            className="text-base cursor-pointer text-black/85 py-2 px-8 border rounded"
          >
            clear all
          </div>
        </div>
      </form>
      <AddLecturePopUp
        setChapterData={setChapterData}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        lecture={lecture}
        setLecture={setLecture}
        setCourseData={setCourseData}
      />
    </div>
  );
};

export default AddCourse;
