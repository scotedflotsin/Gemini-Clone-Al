import React from "react";
import { MdOutlineModeComment } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

const ChatHistory = () => {
  return (
    <>
      <div className="w-[350px] justify-center flex">
        <div className="hover:bg-[rgba(206,206,206,0.07)] trigger triger pl-3 py-2 rounded-full text-[white] justify-between flex inline-flex items-center gap-[10px] w-[320px]">
          <MdOutlineModeComment />
          <p>Leave Reaquest for Cousion's E...</p>

          <div className="target invisible w-[24px] h-[auto] p-1 mr-2 h-[29px] flex justify-center items-center">
            <SlOptionsVertical className="edit-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHistory;
