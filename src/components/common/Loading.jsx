import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[88vh]">
      <div className="w-14 aspect-square border-4  border-gray-300 border-t-4 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
