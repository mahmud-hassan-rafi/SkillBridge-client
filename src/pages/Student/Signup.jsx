import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { errorNotify, successNotify } from "@utils/toast-notify/toastify.js";
import { useRegisterMutation } from "@features/auth/authApi.js";
import { useSelector } from "react-redux";
import { assets } from "@assets/assets";

const Signup = () => {
  const state = useSelector((state) => state.auth);
  // eslint-disable-next-line no-unused-vars
  const [registerStudent, response] = useRegisterMutation();

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    role: "student",
    gender: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const isPasswordMatchWithConfirm =
    userData.password &&
    confirmPassword &&
    userData.password === confirmPassword
      ? true
      : false;

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!isPasswordMatchWithConfirm) {
      errorNotify("password not matched with confirm password");
      return;
    }
    try {
      const res = await registerStudent({
        ...userData,
        imageUrl:
          userData.gender === "male" ? assets?.male_user : assets?.female_user,
      }).unwrap();
      successNotify(res?.message);

      setUserData({
        fullname: {
          firstname: "",
          lastname: "",
        },
        email: "",
        password: "",
        role: "",
      });
      navigate("/");
    } catch (error) {
      navigate(error?.data?.navigate);
      if (error?.data?.errors) {
        error?.data?.errors.map((err) => {
          errorNotify(err?.msg);
        });
      } else {
        errorNotify(error?.data?.message || error?.message || error);
      }
    }
  };
  return (
    <div className=" w-full h-[88vh] md:h-screen flex flex-col lg:flex-row  justify-between items-center bg-white md:px-8 xl:px-32 ">
      <img
        src={assets.login_theme_img}
        className="mt-8 hidden lg:flex sm:mt-2 w-[clamp(200px,30vw+1rem,400px)] md:h-40"
        alt=""
        draggable={false}
      />
      <div className="w-full sm:w-100 h-full py-3 md:w-120 lg:w-110 flex flex-col gap-2 max-lg:items-center bg-white px-8 rounded-lg justify-between md:overflow-y-auto">
        {/* form */}
        <div className="w-full md:h-[75vh] flex flex-col items-center ">
          <form className="flex flex-col" onSubmit={handleOnSubmit}>
            <label htmlFor="name" className="text-[18px] font-bold mb-2">
              Enter your name
            </label>
            <div className="flex gap-x-3">
              <input
                type="text"
                id="firstname"
                value={userData.fullname.firstname}
                onChange={(event) => {
                  setUserData((pre) => {
                    return {
                      ...pre,
                      fullname: {
                        ...pre.fullname,
                        firstname: event.target.value,
                      },
                    };
                  });
                }}
                required
                placeholder="Firstname"
                className="text-base rounded w-1/2 p-3 bg-[#eeeeee] placeholder:text-base outline-blue-100 mb-3"
              />
              <input
                type="text"
                id="lastname"
                value={userData.fullname.lastname}
                onChange={(event) => {
                  setUserData((preData) => {
                    return {
                      ...preData,
                      fullname: {
                        ...preData.fullname,
                        lastname: event.target.value,
                      },
                    };
                  });
                }}
                required
                placeholder="Lastname"
                className="text-base rounded w-1/2 p-3 bg-[#eeeeee] placeholder:text-base outline-blue-100 mb-3"
              />
            </div>
            <label htmlFor="email" className="text-[18px] font-bold mb-2">
              What's your email
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={(event) => {
                setUserData((preData) => {
                  return { ...preData, email: event.target.value };
                });
              }}
              required
              placeholder="email@example.com"
              className="text-base rounded p-3 bg-[#eeeeee] placeholder:text-base outline-blue-100 mb-3"
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
              className="text-base rounded p-3 bg-[#eeeeee] placeholder:text-base outline-blue-100 mb-3"
            />
            <label htmlFor="password" className="text-[18px] font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              required
              placeholder="confirm password"
              className={`text-base rounded p-3 bg-[#eeeeee] placeholder:text-base outline-0 ${
                confirmPassword.length > 0 && !isPasswordMatchWithConfirm
                  ? "border border-red-500"
                  : "mb-5"
              } `}
            />
            {confirmPassword.length > 0 && !isPasswordMatchWithConfirm && (
              <p className="text-red-500 text-sm text-left mt-2 mb-3 ">
                Password not matched
              </p>
            )}

            <div>
              <h2 className="text-lg font-semibold">Gender</h2>
              <label
                htmlFor="gender"
                name="gender"
                className="flex items-center gap-4 mb-5 ml-2"
              >
                <span className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    required
                    value={"male"}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="male" className=" text-lg">
                    male
                  </label>
                </span>
                {/* just for space */}
                <span className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value={"female"}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="female" className=" text-lg">
                    female
                  </label>
                </span>
              </label>
            </div>
            <button className="bg-black text-[18px] text-white p-2.5 font-semibold rounded">
              Create Student Account
            </button>
          </form>
          <span className="flex justify-center gap-x-2 flex-wrap font-semibold mt-2">
            <p>Have an account on SkillBridge?</p>
            <Link to={"/login"} className="text-blue-700">
              Login now
            </Link>
          </span>
        </div>

        {/* terms and conditions */}
        <p className="text-sm font-semibold">
          Read our guideline of{" "}
          <span className="underline">Privacy and policy</span> and{" "}
          <span className="underline">Terms and conditions</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
