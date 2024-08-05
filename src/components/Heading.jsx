import React from "react";

const Heading = ({ text, icon }) => {
  return (
    <h1 className="flex justify-center items-center text-neutral-100/50 gap-1">
      {icon}
      {text}
    </h1>
  );
};

export default Heading;
