import React, { useState } from "react";
import crytoplace from "../assets/cryptoplace.png";
import cineverse from "../assets/cineverse_thumbnail.png";
import weatherapp from "../assets/weather app.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLaptopCode, FaLinkedinIn, FaPlay } from "react-icons/fa6";
import Heading from "./Heading";
const cards = [
  {
    title: "Cineverse",
    desc: "This website helps users explore movies, TV shows, and actors using (TMDb) API. It's designed for movie enthusiasts and TV show fans to discover their favorite content.",
    technologies: ["ReactJS", "React Router", "FetchAPI", "SCSS"],
    image: cineverse,
    href: "https://github.com/Kelvin2704/react_cineverse_movie",
    live: "https://react-cineverse-movie.vercel.app/",
  },
  {
    title: "CryptoPlace",
    desc: "This is a website used to check the status of cryptocurrency such as price, 24 hours change, market cap, rank of that coin, 10-day price chart by using Gecko API.",
    technologies: ["Vite", "Axios", "SCSS", "FetchAPI"],
    image: crytoplace,
    href: "https://github.com/Kelvin2704/cryptoplace",
    live: "https://cryptoplace-beryl.vercel.app/",
  },
  {
    title: "Weather App",
    desc: "This website is used to display weather information in different countries, forecast weather by hour, day, convert degrees C to degrees F, and also determine the weather in the current location.",
    technologies: ["ReactJS", "TailwindCSS", "FetchAPI"],
    image: weatherapp,
    href: "https://github.com/Kelvin2704/react-weather-app",
    live: "https://react-weather-app-lftz-mvlbenvn5-kelvin2704.vercel.app/",
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
    <div className="order-4 col-span-2 row-span-2 md:order-5 xl:order-1 lg:col-span-2 lg:row-span-2 xl:col-span-1 xl:row-span-3">
      <div className="bg-neutral-800 rounded-xl border-2 border-neutral-200/20 text-neutral-50 px-2 py-5 md:p-10 xl:p-4 flex flex-col space-y-4 h-full">
        <Heading
          text={"Personal projects"}
          icon={<FaLaptopCode color="#22c55e" />}
        />
        <div className="h-3/5 lg:h-2/5 w-full">
          <img
            className="rounded-xl object-cover object-center w-full h-full aspect-video drop-shadow-xl"
            src={cards[currentIndex].image}
            alt=""
          />
        </div>

        <div className="space-y-2 md:space-y-3 xl:space-y-2">
          <h1 className="text-xl md:text-3xl xl:text-2xl font-bold ">
            {cards[currentIndex].title}
          </h1>

          <p className="text-neutral-100/50 text-sm md:text-lg xl:text-sm line-clamp-4 xl:line-clamp-3">
            {cards[currentIndex].desc}
          </p>

          <div className="flex flex-wrap gap-1 md:gap-2 transition-all">
            {cards[currentIndex].technologies.map((tech, index) => (
              <div
                className="p-2 bg-neutral-100/10 text-sm md:text-lg xl:text-sm rounded-xl"
                key={index}
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex space-x-1">
              <a
                href={cards[currentIndex].href}
                target="_blank"
                rel="noopener"
                className="size-10 md:size-12 xl:size-10 rounded-xl flex items-center justify-center bg-neutral-950 "
              >
                <FiGithub />
              </a>

              <a
                href={cards[currentIndex].live}
                target="_blank"
                rel="noopener"
                className="size-10 md:size-12 xl:size-10 bg-neutral-950 rounded-xl flex items-center justify-center"
              >
                <FaPlay />
              </a>
            </div>

            <div className="flex space-x-1">
              <button
                onClick={prevProject}
                className="size-10 md:size-12 xl:size-10 flex justify-center items-center bg-green-500 rounded-xl"
              >
                <MdArrowBackIos />
              </button>
              <button
                onClick={nextProject}
                className="size-10 md:size-12 xl:size-10 flex justify-center items-center bg-green-500 rounded-xl"
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
        {/* navigate buttons */}
      </div>
    </div>
  );
};

export default Projects;
