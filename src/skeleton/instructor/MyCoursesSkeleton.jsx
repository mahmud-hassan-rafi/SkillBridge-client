import React from "react";
import uniqid from "uniqid";

const MyCoursesSkeleton = () => {
  return (
    <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
      <table className="table-fixed md:table-auto w-full overflow-x-auto md:overflow-hidden">
        <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
          <tr>
            <th className="w-16 px-2 sm:px-4 py-3 font-semibold truncate">
              <div className="w-full h-4 bg-gray-200 animate-pulse" />
            </th>
            <th className="w-15 px-2 sm:px-4 py-3 font-semibold truncate">
              <div className="w-full h-4 bg-gray-200 animate-pulse" />
            </th>
            <th className="w-10 px-2 sm:px-4 py-3 font-semibold truncate">
              <div className="w-full h-4 bg-gray-200 animate-pulse" />
            </th>
            <th className="w-18 px-2 sm:px-4 py-3 font-semibold truncate ">
              <div className="w-full h-4 bg-gray-200 animate-pulse" />
            </th>
          </tr>
        </thead>

        <tbody className="text-gray-500 text-sm">
          {Array.from({ length: 2 }).map(() => {
            return (
              <tr key={uniqid()} className="border-b border-gray-500/20">
                <td className="w-16 px-2 sm:px-4 py-3 flex items-center md:gap-x-3">
                  <div className="min-w-16 h-10 max-h-10 max-w-16 bg-gray-200/80 animate-pulse " />
                  <span className="hidden md:block h-5 w-50 bg-gray-200/80 animate-pulse" />
                </td>

                <td className="w-15 px-2 sm:px-4 py-3 ">
                  <div className="w-full h-4 bg-gray-200/80 animate-pulse" />
                </td>

                <td className="w-10 px-2 sm:px-4 py-3">
                  <div className="w-full h-4 bg-gray-200/80 animate-pulse" />
                </td>

                <td className="w-18 px-2 sm:px-4 py-3">
                  <div className="w-full h-4 bg-gray-200/80 animate-pulse" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyCoursesSkeleton;
