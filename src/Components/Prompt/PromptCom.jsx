import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import Ayushi from "../../assets/my_friend.jpg";
import logo from "../../assets/logo.webp";
import { IoIosArrowDown } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import googlelogo from "../../assets/googlelogo.webp";
import { SlOptionsVertical } from "react-icons/sl";
import "../Prompt/PromptCom.css";

const PromptCom = ({prompt, response, id, onCopy, onLike, onDislike, isLoading}) => {

const [liked, setLiked] = useState(false);
const [disliked, setDisliked] = useState(false);

console.log("below to sub: "+isLoading);
const handleCopy = ()=>{
  onCopy(id);
  navigator.clipboard.writeText(response);
};

const handleLike = () =>{
  setLiked(true);
  setDisliked(false);
  onLike(id);
};

const handleDislike = ()=>{
  setDisliked(true);
  setLiked(false);
  onDislike(id);
}

  return (
    <>
      <div className="text-[#C4C7C5] response-component max-w-[690px] w-full">
        <div>
          <div className="flex justify-between p-[10px]">
            <img
              className="w-[33px] h-[33px] rounded-full"
              src={Ayushi}
              alt=""
            />
            <MdOutlineEdit className="custom-bg" />
          </div>

          <div className="text-[17px] mx-[10px] text-[#C4C7C5]">
            {
              prompt.toString()
            }
          </div>
          <div className="flex justify-between m-[10px]">
            <div>
              <img
                className={`w-[33px] h-[33px] rounded-full ${isLoading? "running":"not-running"}`}
                src={logo}
                alt=""
              />
            </div>
            <div>
              <div className="flex gap-[20px]">
                <div className="flex justify-center items-center font-semibold gap-[10px] hover:bg-[#1E2126] rounded-full px-[20px] text-[#C4C7C5]">
                  <p>Show darfts</p>
                  <IoIosArrowDown
                    style={{
                      fontSize: "22px",
                    }}
                  />
                </div>
                <HiMiniSpeakerWave className="custom-bg" />
              </div>
            </div>
          </div>
        </div>

        <div className="m-[10px] font-[600] text-[19px]">
          <p></p>
        </div>

        <div className="m-[10px] text-[18px]">
          <p>
           {
            response.toString()
           }
          </p>
        </div>

        <div className="flex justify-start items-center gap-[10px] m-[10px] mt-[20px]">
          <BiLike className="custom-bg" onClick={handleLike} />
          <BiDislike className="custom-bg" onClick={handleDislike} />
          <GiSettingsKnobs className="custom-bg" />
          <FiShare2 className="custom-bg" />
          <img className="custom-google" src={googlelogo} alt="" />
          <SlOptionsVertical className="custom-menu" />
        </div>
      </div>
    </>
  );
};

export default PromptCom;
