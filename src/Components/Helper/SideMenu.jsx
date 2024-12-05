import react from "react";
import { MdOutlineModeComment } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegGem } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const SideMenu = ({ isMenuOpened, icon, title }) => {
  return (
    <>
      <div className="font-semibold w-[350px] justify-center flex mt-[1px]">
        <div className="hover:bg-[rgba(206,206,206,0.07)] trigger triger pl-3 py-[2px] rounded-full text-[white] justify-start flex inline-flex items-center gap-[10px] w-[320px]">
          {icon == "FaRegGem" ? (
            <FaRegGem
              style={{
                fontSize: "17px",
              }}
              className={`${
                isMenuOpened ? "" : "my-[7px]"
              } transition-all duration-200`}
            />
          ) : icon == "MdHelpOutline" ? (
            <MdHelpOutline
              style={{
                fontSize: "17px",
              }}
              className={`${
                isMenuOpened ? "" : "my-[7px]"
              } transition-all duration-200`}
            />
          ) : icon == "MdOutlineHistory" ? (
            <MdOutlineHistory
              style={{
                fontSize: "17px",
              }}
              className={`${
                isMenuOpened ? "" : "my-[7px]"
              } transition-all duration-200`}
            />
          ) : icon == "IoSettingsSharp" ? (
            <IoSettingsSharp
              style={{
                fontSize: "17px",
              }}
              className={`${
                isMenuOpened ? "" : "my-[7px]"
              } transition-all duration-200`}
            />
          ) : (
            <IoSettingsSharp
              style={{
                fontSize: "17px",
              }}
              className={`${
                isMenuOpened ? "" : "my-[7px]"
              } transition-all duration-200`}
            />
          )}

          <p className="ml-[17px]">{title}</p>

          <div className=" invisible w-[28px] h-[auto] p-1 mr-2 h-[28px] flex justify-center items-center"></div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
