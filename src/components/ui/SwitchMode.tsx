import { useState } from "react";

const SwitchMode = () => {
  let [switchMode, setSwitchMode] = useState(false);

  return (
    <button
      className={`z-10 primary-design w-[120px] h-[${
        switchMode ? "58px" : "28px"
      }] border-t-[0px]  rounded-t-[0px] text-xs text-headers absolute t-0 left-[45%]`}
    >
      Switch Theme
    </button>
  );
};

export default SwitchMode;
