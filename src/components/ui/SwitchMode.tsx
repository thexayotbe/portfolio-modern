import color from "@/assets/images/color.png";
import dark from "@/assets/images/dark.png";
import light from "@/assets/images/light.png";
import { useState } from "react";

const SwitchMode = ({
  switchMode,
  onClick,
}: {
  switchMode: boolean;
  onClick: any;
}) => {
  let [mode, setMode] = useState<string>("Switch Theme");
  return (
    <div
      onClick={onClick}
      onMouseLeave={() => setMode("Swtich Theme")}
      className={`z-10 primary-design w-[90px] relative  ${
        switchMode ? "h-[58px]" : "h-[32px]"
      } border-t-[0px]  rounded-t-[0px] text-[10px] text-headers  t-0 left-[45%] transition-all duration-300 ease-in-out text-center pt-1 cursor-pointer`}
    >
      <span
        className="block transition-opacity duration-300 ease-in-out opacity-100"
        key={mode} // Use key to force re-render on mode change
      >
        {mode}
      </span>
      <div
        className={`flex items-center gap-1 mt-[5px] justify-center bg-mainBg h-[27px] rounded-xl overflow-hidden transition-all duration-300 ease-in-out  ${
          switchMode ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
        }`}
      >
        <img
          src={dark}
          onMouseEnter={() => setMode("Dark")}
          alt=""
          width={25}
          height={25}
          className="rounded-full cursor-pointer"
        />
        <img
          src={light}
          onMouseEnter={() => setMode("Light")}
          alt=""
          width={25}
          height={25}
          className="rounded-full cursor-pointer"
        />
        <img
          src={color}
          onMouseEnter={() => setMode("Color")}
          alt=""
          width={25}
          height={25}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SwitchMode;
