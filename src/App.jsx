import react, { useState } from "react";
import Sidebar from "./Components/SideBar/Sidebar";
import Navbar from "./Components/NavBar/Navbar";
import PromptCom from "./Components/Prompt/PromptCom";

const App = () => {
  document.body.style.overflow = 'hidden';
  const [isMenuOpened, setMenuOpened] = useState("true");
  console.log(isMenuOpened);
  return (
    <>
      <div className="w-full h-[100vh] flex">
        <Sidebar setMenuOpened={setMenuOpened} isMenuOpened={isMenuOpened} />
        <Navbar isMenuOpened={isMenuOpened} />
      </div>
    </>
  );
};

export default App;
