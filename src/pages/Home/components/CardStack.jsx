import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const CardStack = ({ cards }) => {
  return (
    <div className="card-container  xl:w-4/5 px-2 py-10 md:px-6">
      <div className="card-list flex flex-col gap-20 md:gap-40 xl:gap-52">
        {cards.map((card, index) => (
          <div className="card sticky top-[6rem] w-full h-full border-neutral-500 border rounded-xl">
            <div
              // style={{ background: `${card.bgColor}` }}
              className="h-full w-full bg-neutral-50 rounded-xl md:rounded-2xl flex flex-col lg:flex-row justify-center items-center shadow-2xl lg:p-5"
              key={index}
            >
              {/* image */}
              <div className="card-image order-1 w-full h-56 md:h-96 lg:h-full lg:order-2 lg:w-1/2 xl:w-3/5 rounded-xl">
                <img
                  className=" bg-cover w-full h-full rounded-tl-xl rounded-tr-xl lg:rounded-xl lg:hover:scale-105 transition-all"
                  src={card.image}
                  alt=""
                />
              </div>

              {/* content */}
              <div className="card-content order-2 h-80 w-full p-2 flex flex-col justify-between md:p-4 lg:order-1 lg:h-96 lg:w-1/2 xl:w-2/5 ">
                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl md:text-4xl font-custom font-bold">
                    {card.title}
                  </h1>
                  <p className="text-neutral-500 md:text-lg">{card.desc}</p>
                  <div className=" flex flex-row justify-start items-center gap-1 w-full flex-wrap">
                    {card.technologies.map((technology, index) => (
                      <div
                        className="bg-neutral-200 text-neutral-600 lg:text-sm font-custom font-medium p-2 rounded-md"
                        key={index}
                      >
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>

                {/* button */}
                <div className="flex py-2 gap-2 ">
                  <button className="bg-purple-800 hover:bg-purple-600 p-2 rounded-md text-neutral-50 flex items-center justify-center gap-2 transition-all">
                    Preview it <FontAwesomeIcon icon={faPlayCircle} />
                  </button>
                  <button className="bg-neutral-800 hover:bg-neutral-600 p-2 rounded-md text-neutral-50 flex items-center justify-center gap-2 transition-all">
                    Github Repository <FontAwesomeIcon icon={faGithub} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStack;
