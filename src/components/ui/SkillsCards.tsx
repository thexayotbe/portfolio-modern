import classNames from "classnames";
import React from "react";
import { PiNavigationArrowDuotone } from "react-icons/pi";

interface SkillsCardsProps {
  title: string;
  color: string;
  positions: string;
}

const SkillsCards: React.FC<SkillsCardsProps> = ({
  title,
  color,
  positions,
}) => {
  return (
    <div className={classNames("absolute", positions)}>
      <div className="relative z-[15]">
        <div className="absolute z-10 -top-4 -left-4">
          <PiNavigationArrowDuotone
            style={{ color: color }}
            className="text-[20px]"
          />
        </div>
        <div
          style={{ backgroundColor: color }}
          className="w-fit h-[32px] flex justify-center items-center text-black px-2 text-sm rounded-sm"
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default SkillsCards;
