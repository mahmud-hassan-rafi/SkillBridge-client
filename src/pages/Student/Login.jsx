import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "@assets/assets";
import { useLoginMutation } from "@features/auth/authApi";
import { errorNotify } from "@utils/toast-notify/toastify";
import Loading from "@components/common/Loading";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      await login({ ...userData, role: "student" }).unwrap(); // unwrap()

      setUserData({ email: "", password: "" });
      navigate("/");
    } catch (err) {
      errorNotify(err?.data?.message || err?.message || err);
      navigate(err?.data?.navigate);
    }
  };

  return !isLoading ? (
    <div className=" w-full h-[88vh] flex flex-col md:flex-row justify-between items-center bg-white md:px-8 xl:px-32">
      <img
        src={assets.login_theme_img}
        className="mt-8 sm:mt-2 w-[clamp(200px,30vw+1rem,400px)] md:h-40 "
        alt=""
        draggable={false}
      />
      <div className="w-full sm:w-90 h-[75vh] md:w-100 lg:w-110 flex flex-col items-center bg-white px-8 rounded-lg">
        <div className="w-full md:h-full flex flex-col items-center gap-5 justify-center mb-10">
          <p className="mx-auto mt-4 text-[clamp(22px,2vw+0.5rem,32px)] font-medium text-center">
            Login to continue your learning journey
          </p>
          <form className="flex flex-col mt-4 w-full" onSubmit={handleOnSubmit}>
            {" "}
            <label htmlFor="email" className="text-[18px] font-bold mb-2">
              What's your email
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={(event) => {
                setUserData((pre) => {
                  return { ...pre, email: event.target.value };
                });
              }}
              required
              placeholder="email@example.com"
              className="text-base rounded p-3 bg-[#eeeeee] placeholder:text-base outline-blue-100 mb-6"
            />
            <label htmlFor="password" className="text-[18px] font-bold mb-2">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={(event) => {
                setUserData((preData) => {
                  return { ...preData, password: event.target.value };
                });
              }}
              required
              placeholder="password"
              className="text-base rounded p-3 bg-[#eeeeee] placeholder:text-base outline-blue-100 mb-6"
            />
            <button className="bg-black text-[18px] text-white p-2.5 font-semibold rounded">
              Login
            </button>
          </form>
          <span className="flex justify-center gap-x-2 font-semibold mt-2">
            <p className="text-base">New to SkillBridge?</p>
            <Link to={"/signup"} className="text-blue-700">
              Create new Account
            </Link>
          </span>
        </div>
        {/* <div className="flex w-full">
          <Link
            to={"/instructor/login"}
            className="bg-cyan-600 w-full text-white font-semibold rounded p-3 text-center text-base "
          >
            Log In with your organization
          </Link>
        </div> */}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Login;
