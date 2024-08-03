import React from "react";
import { twMerge } from "tailwind-merge";
import { SiFramework } from "react-icons/si";
import { FaKeyboard } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";

const Skills = () => {
  const skills = [
    {
      title: "Frameworks/Libraries",
      items: ["React", "Redux", "React Router", "Vite"],
      icon: <SiFramework color="#5b21b6" size={30} />,
    },
    {
      title: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
      icon: <FaKeyboard color="#f97316" size={30} />,
    },
    {
      title: "Styling",
      items: ["SASS", "TailwindCSS", "Bootstrap", "Material-UI"],
      icon: <MdDraw color="#0ea5e9" size={30} />,
    },
    {
      title: "Soft skills",
      items: ["Problem-solving", "Teamwork", "Attention to detail"],
      icon: <BsFileEarmarkPersonFill color="#ef4444" size={30} />,
    },
    {
      title: "APIs & Data",
      items: ["RESTful APIs", "MongoDB", "Axios"],
      icon: <FaDatabase color="#10b981" size={30} />,
    },
  ];

  return (
    <div id="skills" className=" bg-neutral-100 skill p-2 md:py-20 ">
      <div className="container max-w-screen-2xl m-auto py-5 px-2 w-full h-full md:px-6 flex justify-center">
        <div className="flex flex-col items-center w-full h-full">
          <div className="w-full text-center">
            <h1 className="text-3xl md:text-5xl font-custom font-bold">
              Skills
            </h1>
          </div>
          <div className="w-full h-full py-5 gap-2 grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-6 lg:max-w-4xl lg:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={twMerge(
                  `box bg-white flex justify-center items-center rounded-xl border-2`,
                  index === 0 ? "lg:col-span-3 lg:row-span-4" : "",
                  index === 1 || index === 2 || index === 3
                    ? "lg:col-span-2 lg:row-span-2"
                    : "",
                  index === 4 ? "lg:col-span-3 lg:row-span-2" : ""
                )}
              >
                <div className="content w-full h-full p-5 flex flex-col justify-center items-center space-y-4">
                  <div>{skill.icon}</div>
                  <h2 className="text-2xl lg:text-3xl h-10 font-custom font-bold">
                    {skill.title}
                  </h2>
                  <div className="skills">
                    <ul className="w-full flex flex-wrap gap-1">
                      {skill.items.map((item) => (
                        <li className="text-neutral-600 md:text-sm p-2 h-fit rounded-md font-custom font-medium bg-neutral-200 ">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
