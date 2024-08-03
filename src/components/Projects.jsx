import React, { useState } from "react";
import crytoplace from "../assets/cryptoplace.png";
import cineverse from "../assets/cineverse_thumbnail.png";
import weatherapp from "../assets/weather app.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaPlay } from "react-icons/fa6";
const cards = [
  {
    title: "Cineverse",
    desc: "This website helps users explore movies, TV shows, and actors using (TMDb) API. It's designed for movie enthusiasts and TV show fans to discover their favorite content.",
    technologies: ["ReactJS", "React Router", "FetchAPI", "SCSS"],
    image: cineverse,
  },
  {
    title: "CryptoPlace",
    desc: "This is a website used to check the status of cryptocurrency such as price, 24 hours change, market cap, rank of that coin, 10-day price chart by using Gecko API.",
    technologies: ["Vite", "Axios", "SCSS", "FetchAPI"],
    image: crytoplace,
  },
  {
    title: "Weather App",
    desc: "This website is used to display weather information in different countries, forecast weather by hour, day, convert degrees C to degrees F, and also determine the weather in the current location.",
    technologies: ["ReactJS", "TailwindCSS", "FetchAPI"],
    image: weatherapp,
  },
];
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };
  return (
    <div className="bg-neutral-800 rounded-xl border text-neutral-50 px-2 py-5 xl:p-5 flex flex-col space-y-2 h-full">
      <h1 className="w-full text-3xl text-green-500 font-custom font-black">
        My Projects
      </h1>

      <img
        className="rounded-xl w-full aspect-video drop-shadow-xl"
        src={cards[currentIndex].image}
        alt=""
      />

      <div className="space-y-3">
        <h1 className="text-4xl font-custom font-bold">
          {cards[currentIndex].title}
        </h1>
        <div className="">
          <p className="text-neutral-50 text-sm">{cards[currentIndex].desc}</p>
        </div>
        <div className="flex flex-wrap gap-1 transition-all">
          {cards[currentIndex].technologies.map((tech, index) => (
            <div className="p-2 text-sm border rounded-xl" key={index}>
              {tech}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2">
            <div className="size-10 rounded-xl flex items-center justify-center bg-neutral-950 ">
              <FiGithub />
            </div>
            <div className="h-10 w-fit p-2 bg-neutral-950 rounded-xl flex items-center justify-center gap-1 ">
              Live Preview <FaPlay />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevProject}
              className="size-10 flex justify-center items-center bg-green-500 rounded-xl"
            >
              <MdArrowBackIos />
            </button>
            <button
              onClick={nextProject}
              className="size-10 flex justify-center items-center bg-green-500 rounded-xl"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
      {/* navigate buttons */}
    </div>
  );
};

export default Projects;
