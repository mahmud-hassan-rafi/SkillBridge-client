import React, { useRef } from "react";
import { Link } from "react-router-dom";

const LoggedIn = ({ setClickOnProfile, setProfilePosition, auth }) => {
  const profilePictureRef = useRef();

  const onClickHandler = (e) => {
    e.stopPropagation();
    const rect = profilePictureRef.current.getBoundingClientRect();

    setProfilePosition({
      top: rect.top,
      bottom: rect.bottom,
      right: rect.right,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      x: rect.x,
      y: rect.y,
    });
    setTimeout(() => setClickOnProfile((prev) => !prev), 100);
  };

  return (
    <>
      <div className="hidden md:flex items-center gap-5">
        <Link to="/my-enrollments">My Enrollments</Link>
      </div>
      <img
        loading="lazy"
        src={auth?.user?.imageUrl}
        alt=""
        className="w-10 h-10 rounded-full ml-5 cursor-pointer shadow"
        onClick={onClickHandler}
        ref={profilePictureRef}
      />
    </>
  );
};

export default LoggedIn;
