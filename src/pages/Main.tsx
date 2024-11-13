import contact from "@/assets/icons/contact.svg";
import profilePicuture from "@/assets/images/profile.jpg";
import MainCards from "@/components/MainCards";
import SwitchMode from "@/components/ui/SwitchMode";
import { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

const Main = () => {
  let [switchMode, setSwitchMode] = useState<boolean>(false);

  return (
    <div className="main-container h-[100vh] flex flex-col gap-5 relative">
      <SwitchMode
        switchMode={switchMode}
        onClick={() => setSwitchMode(!switchMode)}
      />
      <div className="basis-1/6 flex justify-between items-center line">
        <div className="flex items-center gap-5">
          <img
            className="object-cover w-[100px] h-[100px] rounded-full"
            src={profilePicuture}
            alt="ProfilePicture"
            width={30}
            height={30}
          />
          <div>
            <h3 className="text-headers text-base font-extralight">
              Mamajonov Khayotbek
            </h3>
            <p className="text">Front-End Developer</p>
          </div>
        </div>
        <button className="primary-design w-[100px] h-[30px] flex justify-center items-center gap-2   text-xs text-headers">
          Contact <img src={contact} alt="" />
        </button>
        {/* <Line /> */}
      </div>

      <div className="basis-4/6">
        <MainCards />
      </div>
      <div className="basis-1/6  border-t-line border-t-[1px] mt-5 flex justify-between text-text text-sm pt-5">
        <p>&#169; 2024</p>
        <a href="">
          <FaGithubSquare className="text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Main;
