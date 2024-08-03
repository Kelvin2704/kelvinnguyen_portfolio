import React from "react";
import profile from "../../../assets/profile.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const About = () => {
  const [headline] = useTypewriter({
    words: ["Kelvin Nguyen.", "a Front-End Developer."],
    typeSpeed: 100,
    delaySpeed: 1000,
    loop: 3,
  });
  return (
    <div id="about" className="relative flex flex-col items-center justify-center w-full bg-neutral-50 overflow-hidden select-none">
      <div className="about-wrapper flex flex-col items-center justify-center h-screen w-full z-30">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="about-img w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[300px] lg:h-[300px]">
            <img className="rounded-full w-full h-full" src={profile} alt="" />
          </div>
          <div className="about-heading font-custom text-center text-neutral-800 font-black text-3xl md:text-6xl">
            <h1>
              Hello,I'm{" "}
              <span className="text-violet-500">
                {headline}
                <Cursor cursorColor="black" />
              </span>
            </h1>
          </div>
          <div className="about-overview w-4/5 text-xl md:text-2xl lg:w-3/5 text-neutral-500 h-full">
            <p>
              I have passion for building attractive and{" "}
              <span className="text-blue-500 font-custom font-black">
                user-friendly
              </span>{" "}
              websites. I use modern technologies to create fast and{" "}
              <span className="text-orange-500 font-custom font-black">
                responsive designs
              </span>{" "}
              that enhance the user experience.
            </p>
          </div>
        </div>
        <div className="about-btn absolute bottom-5 gap-2 flex flex-col items-center justify-center">
          <p className="md:text-xl text-neutral-800">My Projects</p>
          <button className="px-3 flex justify-center items-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full text-white">
            <a href="#projects">
              {/* <FontAwesomeIcon className="animate-bounce" icon={faComputerMouse} /> */}

              <div className="relative w-[25px] h-[40px] flex justify-center items-start border-2 border-neutral-400 rounded-full bg-neutral-700">
                <div className="w-[5px] h-[7px] bg-neutral-50 rounded-full absolute animate-moveDot"></div>
              </div>
            </a>
          </button>
        </div>
      </div>
      <div className="absolute w-full h-full bg-neutral-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 z-10"></div>
      <div className="z-0">
        <div className="absolute animate-one w-32 h-32 top-[15%] -right-14 md:w-48 md:h-48 lg:w-80 lg:h-80 lg:-right-32  rounded-full bg-orange-500"></div>
        <div className="absolute w-52 h-52 lg:w-72 lg:h-72 top-2/3 -left-28 rounded-full bg-blue-500"></div>
      </div>

      <div class="absolute inset-0 z-20 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>
  );
};

export default About;
