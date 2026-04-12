import { useAppContext } from "@hooks/ContextHook";
import React from "react";

const Price = ({ courseData }) => {
  const { currency } = useAppContext();

  return (
    <div className="flex gap-3 items-center pt-2">
      <p className="md:text-4xl text-2xl to-gray-800 font-semibold">
        {currency}
        {(
          courseData?.coursePrice -
          (courseData?.discount * courseData?.coursePrice) / 100
        ).toFixed(2)}
      </p>
      <p className="md:text-lg text-gray-500 line-through">
        {currency}
        {courseData?.coursePrice}
      </p>
      <p className="md:text-lg text-gray-500">{courseData?.discount}% off!</p>
    </div>
  );
};

export default Price;
