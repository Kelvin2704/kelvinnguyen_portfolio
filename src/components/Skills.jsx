import React from "react";
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
    <div className="w-full h-full bg-neutral-800 overflow-hidden p-5 space-y-2 border rounded-xl">
      <h1 className="text-3xl text-green-500 font-custom font-black">
        What can I do for?
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {skills.map((skill, index) => (
          <div className="space-y-2" key={index}>
            <h2 className="font-custom font-bold text-neutral-50">
              {skill.title}
            </h2>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
