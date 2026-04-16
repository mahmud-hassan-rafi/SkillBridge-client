export const validateCourse = (data) => {
  if (!data.courseTitle) return "Course title is required";
  if (!data.courseDescription) return "Course description is required";
  if (!data.coursePrice || data.coursePrice <= 0)
    return "Price must be greater than 0";

  if (data.coursePrice <= 0 && data.discount > 0)
    return "No price, no discount";

  if (!data.courseThumbnail) return "Thumbnail is required";

  if (!data.courseContent.length) return "Please add course content";

  for (let i = 0; i < data.courseContent.length; i++) {
    const chapter = data.courseContent[i];

    if (!chapter.chapterContent.length) {
      return `Please add content of chapter ${i + 1}`;
    }
  }

  return null; // no error
};
