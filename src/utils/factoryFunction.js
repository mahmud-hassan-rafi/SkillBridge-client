import uniqid from "uniqid";

export const courseSchema = () => ({
  courseTitle: "",
  courseDescription: "",
  coursePrice: 0,
  discount: 0,
  courseContent: [],
  courseThumbnail: null,
});

export const chapterSchema = () => ({
  chapterId: uniqid(),
  chapterTitle: "",
  chapterOrder: 0,
  collapsed: false,
  chapterContent: [],
});

export const lectureSchema = () => ({
  lectureId: uniqid(),
  lectureTitle: "",
  lectureDuration: 0,
  lectureUrl: "",
  isPreviewFree: false,
  lectureOrder: 0,
  currentChapterId: null,
});
