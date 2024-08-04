import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";

const Social = () => {
  const socials = [
    {
      name: "in/phuoclocnguyen",
      icon: <FaLinkedin className="p-2 size-9 bg-neutral-50 rounded-xl text-neutral-950" />,
      link:'https://www.linkedin.com/in/phuoclocnguyen/'
    },
    {
      name: "Kelvin2704",
      icon: <FiGithub className="p-2 size-9 bg-neutral-50 rounded-xl text-neutral-950" />,
      link:'https://github.com/Kelvin2704'
    },
  ];
  return (
    <div className="w-full h-full flex flex-col py-10 p-2 md:p-5 space-y-4">
      <h1 className="flex justify-center items-center text-neutral-100/50 w-full gap-1">
        <IoSunny color="#22c55e " /> Follow me{" "}
      </h1>
      <p className="text-4xl font-black text-green-500 w-full flex items-center justify-center">
        Social Media
      </p>
      <div className="w-full text-sm text-neutral-50 space-y-3">
        {socials.map((social, i) => (
          <a href={social.link} target="_blank" key={i} className="w-full bg-neutral-100/10 rounded-xl flex items-center space-x-2 p-3 ">
            {social.icon}
            <p className="text-base">/{social.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
