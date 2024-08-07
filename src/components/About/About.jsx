import React from "react";
import profile from "../../assets/profile.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaDownload, FaPlus } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import AboutHeader from "./AboutHeader";
import AboutBackground from "./AboutBackground";

const AboutDemo = () => {
  const [headline] = useTypewriter({
    words: ["Kelvin Nguyen", "a Frontend Developer."],
    typeSpeed: 100,
    delaySpeed: 1000,
    loop: 3,
  });
  return (
    <div className="order-1 w-full h-[80vh] col-span-2 lg:col-span-4 lg:row-span-2 xl:order-4 xl:col-span-2 md:h-[90vh] lg:h-full xl:row-span-3">
      <div className="relative flex flex-col items-center justify-center bg-neutral-900 w-full h-full py-5 p-2 md:p-10 xl:p-5 overflow-hidden rounded-xl border-2 border-neutral-200/20">
        {/* content */}
        <div className="about-wrapper w-full h-full flex flex-col z-30">
          <AboutHeader />
          {/* content */}
          <div className="w-full h-full flex flex-col justify-center items-center text-neutral-50">
            <div className="flex flex-col justify-center items-center space-y-5 xl:space-y-2">
              <div className="size-32 md:size-40 lg:size-48">
                <img
                  className="rounded-full w-full h-full object-cover shadow-2xl border-4 border-green-200/20"
                  src={profile}
                  alt=""
                />
              </div>
              <span className="text-base md:text-lg xl:text-base">Hello, I'm </span>
              <div className="about-heading font-custom text-center ">
                {/*  */}

                <h1 className="text-green-500 font-black text-3xl md:text-5xl lg:text-5xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-400">
                  {headline}
                  <Cursor cursorColor="black" />
                </h1>
              </div>
              <div className="about-overview w-full p-2 md:w-4/5 h-full text-neutral-300/80 md:text-xl lg:text-lg xl:text-base text-center ">
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
        <AboutBackground />
      </div>
    </div>
  );
};

export default AboutDemo;
