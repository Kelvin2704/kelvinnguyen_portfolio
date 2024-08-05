import React from "react";

const GridItem = ({ number, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 bg-neutral-800 border-2 border-neutral-200/20 rounded-xl text-neutral-50 space-y-5 lg:space-y-2">
      <div className="font-custom font-black text-5xl lg:text-7xl text-green-500">{number}+</div>
      <div className="w-full md:w-4/5 bg-neutral-100/10 rounded-xl text-center flex justify-center items-center p-2 space-x-2 ">
        <span className="">{icon}</span> <span className="font-custom font-bold">{description}</span>
      </div>
    </div>
  );
};

export default GridItem;
