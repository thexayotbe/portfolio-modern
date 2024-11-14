import classNames from "classnames"; // For more flexible className handling
import { motion } from "motion/react";
import React, { ReactNode } from "react";
interface CardProps {
  title: string;
  className?: string; // Make className optional
  children: ReactNode;
}
const Card: React.FC<CardProps> = ({ title, className, children }) => {
  return (
    <motion.div
      className={classNames("custom-border bg-grayAccent/[0.3] p-2", className)}
    >
      <h3 className="title line">{title}</h3>
      <div>{children}</div> {/* Render children here */}
    </motion.div>
  );
};

export default Card;
