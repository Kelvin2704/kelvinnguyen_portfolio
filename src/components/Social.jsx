import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import Heading from "./Heading";

const Social = () => {
  const socials = [
    {
      name: "in/phuoclocnguyen",
      icon: (
        <FaLinkedin className="size-6 md:size-7 xl:size-6"/>
      ),
      link: "https://www.linkedin.com/in/phuoclocnguyen/",
    },
    {
      name: "Kelvin2704",
      icon: <FiGithub className="size-6 md:size-7 xl:size-6"/>,
      link: "https://github.com/Kelvin2704",
    },
  ];
  return (
    <div className="order-5 col-span-2 md:col-span-1 md:order-4 lg:order-6 xl:order-5 lg:col-span-2 xl:col-span-1 xl:row-span-2  bg-neutral-800 rounded-xl h-full border-2 border-neutral-200/20">
      <div className="w-full h-full flex flex-col py-5 p-2 md:p-10 xl:p-4 space-y-4">
        <Heading text={"Follow me"} icon={<IoSunny color="#22c55e" />} />
        <h1 className="text-4xl font-black text-green-500 w-full text-center">
          Social Media
        </h1>
        <div className="w-full text-neutral-50 space-y-3">
          {socials.map((social, i) => (
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="w-full  bg-neutral-100/10 rounded-xl flex items-center space-x-3 p-2 "
            >
              <span className="size-10 md:size-12 xl:size-10 bg-neutral-50 text-neutral-900 rounded-xl flex items-center justify-center">
                {social.icon}
              </span>
              <p className="text-sm md:text-lg xl:text-base">/{social.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
