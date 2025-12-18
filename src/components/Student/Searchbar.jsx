import { assets } from "@assets/assets";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const onSearchHandler = (event) => {
    event.preventDefault();
    navigate("/course-list/" + input);
  };

  useEffect(() => {
    (() => {
      if (input && input.length > 2) {
        navigate("/course-list/" + input);
      }
    })();
  }, [input]);

  return (
    <form
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded"
      onSubmit={onSearchHandler}
    >
      <img
        src={assets.search_icon}
        alt="search_icon"
        className="md:w-auto w-10 px-3"
      />
      <input
        type="text"
        placeholder="Search for courses"
        className="w-full h-full outline-none text-gray-500/80"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded md:px-10 px-7 md:py-3 py-2 mx-1"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
