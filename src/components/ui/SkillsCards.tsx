import classNames from "classnames";
import { easeInOut, motion } from "motion/react";
import React from "react";
import { PiNavigationArrowDuotone } from "react-icons/pi";
interface SkillsCardsProps {
  title: string;
  color: string;
  positions: string;
  animation: { x: number; y: number }; // Define the animation properties here, if needed.
}

const SkillsCards: React.FC<SkillsCardsProps> = ({
  title,
  color,
  positions,
  animation,
}) => {
  return (
    <motion.div
      className={classNames("absolute", positions)}
      initial={{ x: 0, y: 0 }}
      animate={animation}
      transition={{
        ease: easeInOut,
        repeatType: "reverse",
        repeat: Infinity,
        duration: 3,
      }}
    >
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
    </motion.div>
  );
};

export default SkillsCards;
