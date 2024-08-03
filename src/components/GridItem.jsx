import React from "react";

const GridItem = ({ number, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 bg-neutral-800 border rounded-xl text-neutral-50">
      <div className="font-custom font-black text-[5rem]">{number}+</div>
      <div className="w-full md:w-4/5 rounded-2xl border text-center flex justify-center items-center p-1 space-x-2 ">
        <span className="">{icon}</span> <span className="font-custom font-bold">{description}</span>
      </div>
    </div>
  );
};

export default GridItem;
