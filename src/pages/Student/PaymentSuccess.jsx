import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  // counting 3...2...1..
  useEffect(() => {
    if (count === 0) return;

    const timerId = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [count]);

  // waiting 3 seconds before navigate
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/my-enrollments");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full min-h-[87vh] flex flex-col justify-center items-center gap-2">
      <FaCircleCheck size={40} className="text-green-600" />
      <p className="text-3xl font-bold text-gray-800/90">Payment Successful</p>
      <p className="text-xl">
        <span className="text-red-500">Redirecting</span> to My Enrollments Page
        in<span className="text-red-500 font-semibold"> {count} seconds</span>
      </p>
    </div>
  );
};

export default PaymentSuccess;
