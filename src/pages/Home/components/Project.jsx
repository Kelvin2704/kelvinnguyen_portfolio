import React from "react";
import CardStack from "./CardStack";
import crytoplace from "../../../assets/cryptoplace.png";
import cineverse from "../../../assets/cineverse_thumbnail.png";
import weatherapp from "../../../assets/weather app.png";

const Project = () => {
  const cards = [
    {
      title: "Cineverse",
      desc: "This website helps users explore movies, TV shows, and actors using The Movie Database (TMDb) API. It's designed for movie enthusiasts and TV show fans to discover and learn more about their favorite content.",
      technologies: ["ReactJS", "React Router", "Axios", "SCSS", "FetchAPI"],
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
    {
      title: "Weather App",
      desc: "This website is used to display weather information in different countries, forecast weather by hour, day, convert degrees C to degrees F, and also determine the weather in the current location.",
      technologies: ["ReactJS", "TailwindCSS", "FetchAPI"],
      image: weatherapp,
    },
  ];

  return (
    <div id="projects" className="bg-neutral-900 ">
      <div className="container max-w-screen-xl m-auto relative flex flex-col items-center justify-center select-none">
        <h1 className="text-3xl md:text-5xl z-50 py-5 text-neutral-50 font-custom font-bold">
          My Projects
        </h1>
        <CardStack cards={cards} />
      </div>
    </div>
  );
};

export default Project;
