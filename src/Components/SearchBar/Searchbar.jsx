import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { IoMicOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";

const Searchbar = ({ isMenuOpened, onSearchInput, trigger }) => {
  const [textHolder, setTextHolder] = useState("");
  const [isClicked, setIsCliked] = useState(true);
  //this function is called when the input changes
  const handleChange = (event) => {
    onSearchInput(event.target.value);
    setTextHolder(event.target.value);
    event.target.value != "" ? setIsCliked(false) : setIsCliked(true);
  };
  const searchTriger = () => {
    trigger("true");
    setIsCliked(true);
  };
  return (
    <>
      <div
        className={` flex flex-col text-white ${
          isMenuOpened ? "custom-width" : "custom-width2"
        }  bg-131314 items-center   transition-all duration-200 px-[10px]`}
      >
        <div className="relative h-[60px]  mb-[5px] mt-[1px] rounded-[200px] flex items-center bg-[#1E1F20]  w-full max-w-[800px]">
          <input
            className="ml-[30px] text-[17px] flex-grow outline-none border-none bg-transparent mr-[10px]"
            type="text"
            onChange={handleChange}
            value={isClicked ? "" : textHolder}
            placeholder=" Enter a prompt here"
          />
          <div className="flex gap-[10px] pr-[10px]">
            <BiImageAdd className="search-icon" />
            <IoMicOutline className="search-icon" />
            <IoSend
              className={`search-icon ${
                textHolder == "" ? "hidden" : "visible"
              } send-transition`}
              onClick={searchTriger}
            />
          </div>
        </div>
        <p className="text-[13px] text-center my-[10px] mx-[13px]">
          Gemini may display inaccurate info, including about people, so
          double-check its response.{" "}
          <span>
            <u>Your privacy Gemini Apps</u>
          </span>
        </p>
      </div>
    </>
  );
};

export default Searchbar;
