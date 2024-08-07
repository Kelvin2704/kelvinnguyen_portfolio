import React from "react";

const Heading = ({ text, icon }) => {
  return (
    <h1 className="flex justify-center items-center text-neutral-50 font-bold gap-1 text-lg md:text-xl xl:text-lg">
      {icon}
      {text}
    </h1>
  );
};

export default Heading;
