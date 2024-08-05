import React from "react";
import { FaDownload } from "react-icons/fa6";

const AboutHeader = () => {
  return (
    <div className="w-full flex justify-between items-center text-sm font-custom font-bold text-neutral-50">
      <div className="flex items-center justify-center border-2 border-neutral-200/20 rounded-2xl gap-2 p-2  bg-neutral-700">
        <span class="relative flex size-3">
          <span class="animate-ping absolute inline-flex size-3 rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full size-3 bg-green-400"></span>
        </span>
        Available for working
      </div>
      <div className="flex items-center justify-center gap-2 text-green-500">
        Resume{" "}
        <div className="border-2 border-neutral-200/20 bg-neutral-700 size-10 flex justify-center items-center rounded-xl  ">
          <FaDownload className="animate-bounce text-green-50" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
