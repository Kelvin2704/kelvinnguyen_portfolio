import React from "react";
import profile from "../assets/profile.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaDownload, FaPlus } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const AboutDemo = () => {
  const [headline] = useTypewriter({
    words: ["Kelvin Nguyen", "a Frontend Developer."],
    typeSpeed: 100,
    delaySpeed: 1000,
    loop: 3,
  });
  return (
    <div className="relative flex flex-col items-center justify-center bg-neutral-900 w-full h-[90vh] lg:h-full p-3 overflow-hidden rounded-xl border">
      {/* content */}
      <div className="about-wrapper w-full h-full flex flex-col z-30">
        {/* buttons available */}
        <div className="w-full flex justify-between items-center text-sm font-custom font-bold text-neutral-50">
          <div className="flex items-center justify-center bg-transparent border rounded-2xl gap-2 p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <span class="relative flex size-3">
              <span class="animate-ping absolute inline-flex size-3 rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full size-3 bg-green-400"></span>
            </span>
            Available for working
          </div>
          <div className="flex items-center justify-center gap-2">
            Resume{" "}
            <div className="border bg-neutral-100/50 size-10 flex justify-center items-center rounded-xl  ">
              <FaDownload className="animate-bounce" color="white" />
            </div>
          </div>
        </div>

        {/* content */}
        <div className="w-full h-full flex flex-col justify-center items-center text-neutral-50">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-32 md:size-48">
              <img
                className="rounded-full w-full h-full object-cover shadow-2xl"
                src={profile}
                alt=""
              />
            </div>
            <div className="about-heading font-custom text-center ">
              {/*  */}
              Hello!
              <h1 className="text-2xl md:text-5xl lg:text-4xl font-black">
                I'm{" "}
                <span className="text-green-500 text-5xl bg-clip-text text-transparent text-[5rem] bg-gradient-to-r from-green-500 to-cyan-400">
                  {headline}
                  <Cursor cursorColor="black" />
                </span>
              </h1>
            </div>
            <div className="about-overview w-full md:w-4/5 h-full text-neutral-300/80 text-lg text-center ">
              <p>
                I love to build{" "}
                <span className="text-neutral-50 font-custom font-black">
                  attractive, user-friendly, fast and responsive 
                </span>{" "}
                websites that enhance the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* blur */}
      <div className="absolute w-full h-full bg-neutral-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 z-10"></div>
      {/* circle */}
      <div className="z-0">
        <div className="absolute animate-one w-32 h-32 top-[15%] -right-14 md:size-48 lg:size-60 lg:-right-32  rounded-full bg-orange-500"></div>
        <div className="absolute size-52 lg:size-64 top-2/3 -left-28 rounded-full bg-blue-500"></div>
      </div>

      {/* <div class="absolute inset-0 z-20 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div> */}

      <div class="absolute inset-0 z-20 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>
  );
};

export default AboutDemo;
