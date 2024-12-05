import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import ChatHistory from "../Helper/ChatHistory";
import SideMenu from "../Helper/SideMenu";
import { FaRegGem } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = ({ setMenuOpened, isMenuOpened }) => {
  const pri = () => {
    setMenuOpened(!isMenuOpened);
  };
  return (
    <>
      <div
        className={`overflow-hidden ${
          isMenuOpened ? "w-[350px]" : "w-[77px]"
        } bg-[#1E1F20]
       h-[100vh] opacity-[0.7] relative transition-all duration-300`}
      >
        <div
          className="icon-container flex
         justify-center w-[70px] h-[70px] items-center "
        >
          <IoMenu className="icon" onClick={() => pri()} />
        </div>
        <div
          className="flex items-center gap-2
         text-white bg-[] inline-flex rounded-full
          px-4 py-2 text-[16px] ml-[14px] mt-[34px]  bg-[#2e2e30] h-[44px]"
        >
          <IoMdAdd />
          <p
            className={`${
              isMenuOpened ? "visible" : "hidden"
            } transition-all duration-2000 line-clamp-1`}
          >
            New chat
          </p>
        </div>
        <p
          className={`ml-[20px] mt-[25px] text-white font-semibold ${
            isMenuOpened ? "visible" : "hidden"
          }`}
        >
          Recent
        </p>
        <div
          className={`pb-[14vh] mt-[10px] absolute h-[70vh] overflow-y-auto scroll-smooth scrollbar-hide ${
            isMenuOpened ? "visible" : "hidden"
          }`}
        >
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
        </div>
        <div className="absolute bottom-0 left-0 right-0  w-[350px] bg-[#1B1B1C] h-[20vh] pt-[5px]">
          <SideMenu
            title={`${isMenuOpened ? "Gem manager" : ""}`}
            icon={"FaRegGem"}
            isMenuOpened={isMenuOpened}
          />
          <SideMenu
            title={`${isMenuOpened ? "Help" : ""}`}
            icon={"MdHelpOutline"}
            isMenuOpened={isMenuOpened}
          />
          <SideMenu
            title={`${isMenuOpened ? "Activity" : ""}`}
            icon={"MdOutlineHistory"}
            isMenuOpened={isMenuOpened}
          />
          <SideMenu
            title={`${isMenuOpened ? "Settings" : ""}`}
            icon={"IoSettingsSharp"}
            isMenuOpened={isMenuOpened}
          />
          <div
            className={`text-[13px] justify-center flex flex-col ml-[30px] my-[5px] ${
              isMenuOpened ? "visible" : "hidden"
            } transition-all duration-300`}
            isMenuOpened={isMenuOpened}
          >
            <li className="text-white font-semibold">
              Lucknow Uttar Pradesh, India
            </li>
            <li className="text-[#398af5] font-semibold list-none ml-[22px]">
              From your IP address Update location
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
