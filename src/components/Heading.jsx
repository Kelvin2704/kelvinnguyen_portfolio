import React from "react";

const Heading = ({ text, icon }) => {
  return (
    <h1 className="flex justify-center items-center text-neutral-100/50 gap-1 text-base md:text-xl xl:text-base">
      {icon}
      {text}
    </h1>
  );
};

export default Heading;
