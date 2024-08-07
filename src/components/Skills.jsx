import React, { useEffect, useState } from "react";
import {
  SiAxios,
  SiJavascript,
  SiMongodb,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import Heading from "./Heading";
import "./Marquee.css";
const SkillItem = () => {
  const skills = [
    {
      title: "Frameworks/Libraries",
      items: ["React", "Redux", "React Router", "Vite"],
      icons: [<FaReact />, <SiRedux />, <SiReactrouter />, <SiVite />],
    },
    {
      title: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
      icons: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiTypescript />],
    },
    {
      title: "Styling",
      items: ["SASS", "TailwindCSS", "Bootstrap", "Material-UI"],
      icons: [<FaSass />, <SiTailwindcss />, <FaBootstrap />],
    },
    {
      title: "APIs & Data",
      items: ["RESTful APIs", "MongoDB", "Axios"],
      icons: [<SiMongodb />, <SiAxios />],
    },
  ];

  return (
    <div className="order-3 col-span-2 md:col-span-1  lg:col-span-2 lg:row-span-1 xl:order-4 xl:col-span-1 xl:row-span-2">
      <div className="w-full flex flex-col h-full bg-neutral-800 overflow-hidden py-5 px-2 md:p-10 xl:p-4 space-y-4 border-2 border-neutral-200/20 rounded-xl">
        <Heading
          text={"What I can do"}
          icon={<IoIosRocket color="#22c55e" />}
        />
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 md:gap-2 xl:gap-5 ">
          {skills.map((skill, index) => (
            <div className="space-y-2 w-full h-full text-wrap" key={index}>
              <div className="text-wrap">
                <h2 className="font-bold text-neutral-50 text-base md:text-lg xl:text-base">
                  {skill.title}
                </h2>
              </div>
              <ul className="flex flex-wrap gap-1 w-full">
                {skill.icons.map((icon, i) => (
                  <li
                    key={i}
                    className="size-9 rounded-xl border flex items-center justify-center bg-neutral-50"
                  >
                    {icon}
                  </li>
                ))}
              </ul>
              {/* <div className="marquee">
                <div className="marquee-content">
                  {skill.icons.map((icon, i) => (
                    <div key={i} className="marquee-item  text-neutral-50 ">
                      {icon}
                    </div>
                  ))}
                  {skill.icons.map((icon, i) => (
                    <div key={i} className="marquee-item  text-neutral-50 ">
                      {icon}
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
