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
    <div className="order-1 col-span-2 lg:order-4 lg:col-span-2 lg:row-span-4 ">
      <div className="relative flex flex-col items-center justify-center bg-neutral-900 w-full h-[80vh] lg:h-full p-3 overflow-hidden rounded-xl border-2 border-neutral-200/20">
        {/* content */}
        <div className="about-wrapper w-full h-full flex flex-col z-30">
          <AboutHeader />
          {/* content */}
          <div className="w-full h-full flex flex-col justify-center items-center text-neutral-50">
            <div className="flex flex-col justify-center items-center space-y-5">
              <div className="size-32 md:size-48">
                <img
                  className="rounded-full w-full h-full object-cover shadow-2xl"
                  src={profile}
                  alt=""
                />
              </div>
              <div className="about-heading font-custom text-center ">
                {/*  */}
                Hello, I'm{" "}
                <h1 className="text-2xl md:text-5xl lg:text-4xl font-black">
                  <span className="text-green-500 text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-400">
                    {headline}
                    <Cursor cursorColor="black" />
                  </span>
                </h1>
              </div>
              <div className="about-overview w-full p-2 md:w-4/5 h-full text-neutral-300/80 lg:text-lg text-center ">
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
