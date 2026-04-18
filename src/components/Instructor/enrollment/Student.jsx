import React from "react";

const Student = ({ item }) => {
  const [loadedImg, setLoadedImg] = React.useState(false);

  return (
    <td className="md:px-4 px-2 py-3">
      <abbr
        title={
          item?.student?.fullname?.firstname +
          " " +
          item?.student?.fullname?.lastname
        }
        className="flex items-center gap-x-3 sm:gap-x-2 md:gap-x-3 decoration-transparent hover:decoration-gray-500/50 cursor-default"
      >
        <div className="relative min-w-10 min-h-10 w-10 h-10 rounded-full flex justify-center items-center ">
          {!loadedImg && (
            <div className="absolute inset-0 size-full rounded-full bg-gray-200/80 transition animate-pulse" />
          )}
          <img
            src={item?.student?.imageUrl}
            onLoad={() => setLoadedImg(true)}
            alt="student_img"
            className="w-9 h-9 rounded-full object-cover bg-center"
          />
        </div>

        <span className="truncate">
          {item?.student?.fullname?.firstname +
            " " +
            item?.student?.fullname?.lastname}
        </span>
      </abbr>
    </td>
  );
};

export default Student;
