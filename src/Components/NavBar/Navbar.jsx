import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";
import Ayushi from "../../assets/my_friend.jpg";
import Searchbar from "../SearchBar/Searchbar";
import PromptCom from "../Prompt/PromptCom";
import "../Prompt/PromptCom.css";
import runPrompt from "../../Services/PromptResponse";

const Navbar = ({ isMenuOpened }) => {
  const [searchText, setSearchText] = useState("");
  const [prompt, setPrompt] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCopy = (id) => {
    console.log(`text copied from : ${id}`);
  };
  const handleDislike = (id) => {
    console.log(`disliked propt is: ${id}`);
  };
  const handleLiked = (id) => {
    console.log(`liked prompt is: ${id}`);
  };

  useEffect(() => {
    handlePrompt(searchText.toString());
    setPrompt([]);
  }, []);

  async function handlePrompt(promptText) {
    const refinePrompt =
      promptText +
      " ,DO mention it in response no by any way it is only to give you condition never mention it in any response in fact in it also: Gemini Note response should not contain any special char e.g *,#,/, ** or and numbring and other like this response should be in paragrapg form.(this condition i am adding as a developer never mention it in response)"; //adding filters

    try {
      setIsLoading(true);
      const newId = prompt.length + 1;
      console.log("id: " + newId);
      setPrompt((prevPrompts) => [
        ...prevPrompts,
        {
          id: newId,
          prompt: promptText,
          response: "",
        },
      ]);
      const result = await runPrompt(refinePrompt.toString());
      if (result) {
        setIsLoading(false);
        // newResponse(newId, result.candidates[0].content.parts[0].text);
        console.log(prompt);
        // Add the response to the prompt with matching id

        setPrompt((prevPrompts) =>
          prevPrompts.map((item) =>
            item.id === newId
              ? {
                  ...item,
                  response: result.candidates[0].content.parts[0].text,
                }
              : item
          )
        );
        console.log("API Result:", result.candidates[0].content.parts[0].text); // Logs the resolved response data
      }

      // newResponse(newId, "I am harsh");
    } catch (error) {
      console.error("Error:", error); // Handle any errors here
    }
  }

  const handleSearchInput = (inputText) => {
    setSearchText(inputText);
  };

  const test = (bo) => {
    if (searchText != "") {
      handlePrompt(searchText.toString());
    } else {
      console.log("value not found..!");
    }
  };

  return (
    <>
      <div className="relative">
        <nav
          className={`w-full ${
            isMenuOpened ? "custom-width" : "custom-width2"
          } h-[70px] transition-all duration-300  absolute flex justify-between items-center px-[20px]`}
        >
          <div>
            <div className="hover:bg-[#53515162] px-[8px] py-[5px] rounded-lg flex text-[20px] font-[600] text-white items-center gap-2">
              <p>Harsh AI</p>
              <IoMdArrowDropdown
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
          </div>

          <div className="flex gap-[25px]">
            <div className="flex items-center hover:bg-[#6e6e6e91]  bg-[#53515162] px-[14px] py-[2px] gap-[10px] rounded-lg">
              <SiGooglegemini
                style={{
                  color: "#D7686F",
                  fontSize: "20px",
                }}
              />
              <p className="text-[13px] py-[6px] font-semibold text-white">
                Try Harsh Advance
              </p>
            </div>
            <div>
              <img
                className="w-[33px] h-[33px] rounded-full"
                src={Ayushi}
                alt=""
              />
            </div>
          </div>
        </nav>

        {
          //main response screen
        }

        <div
          className={`${
            isMenuOpened ? "custom-width" : "custom-width2"
          } custom-height px-[20px] absolute h-[200px] overflow-y-auto justify-start items-center flex flex-col response-container`}
          style={{
            marginTop: "70px",
            paddingTop: "0",
            boxSizing: "border-box",
          }}
        >
          {prompt.map((item) => (
            <PromptCom
              key={item.id}
              id={item.id}
              prompt={item.prompt}
              response={item.response}
              onCopy={handleCopy}
              onLike={handleLiked}
              onDislike={handleDislike}
              isLoading={isLoading}
            />
          ))}
        </div>

        {
          //search bar
        }
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <Searchbar
            isMenuOpened={isMenuOpened}
            onSearchInput={handleSearchInput}
            trigger={test}
          />
        </div>
      </div>
      <div
        className={`w-full ${
          isMenuOpened ? "custom-width" : "custom-width2"
        } self-center mx-auto hidden`}
      >
        <p className="welcome-message">Hello, harsh.</p>
        <p className="sub-welcome-message">How can I help?</p>
      </div>
    </>
  );
};

export default Navbar;
