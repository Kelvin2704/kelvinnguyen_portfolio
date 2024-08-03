import React from "react";
import About from "./components/About";
// import Project from "./components/Project";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
import AboutDemo from "../../components/About";
import GridItem from "../../components/GridItem";

import { FaStar } from "react-icons/fa";

import ContactForm from "../../components/Contact";
import SkillItem from "../../components/Skills";
import { FaFlag } from "react-icons/fa6";
import Projects from "../../components/Projects";

const Home = () => {
  return (
    <>
      {/* <About /> */}
      {/* <Project />
      <Skills />
      <Contact /> */}
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 w-full h-full lg:h-screen container p-2 lg:p-5 m-auto bg-black gap-2">
        <div className="order-4 col-span-2 lg:order-1 lg:col-span-1 row-span-2 lg:row-span-3">
          <Projects />
        </div>

        <div className="order-2 lg:order-2 col-span-2 h-[30vh] lg:h-full">
          <div className="grid grid-cols-2 gap-2 h-full">
            <GridItem
              number={"20"}
              description={"Projects"}
              icon={<FaFlag size={10} color="#22c55e" />}
            />
            <GridItem
              number={"03"}
              description={"Year Expertise"}
              icon={<FaStar size={12} color="#22c55e" />}
            />
          </div>
        </div>
        {/* contact */}
        <div className="order-8 col-span-2 lg:order-3 row-span-3 lg:row-span-2 lg:col-span-1">
          <ContactForm />
        </div>

        {/* about */}
        <div className="order-1 col-span-2 lg:order-4 lg:col-span-2 lg:row-span-2 ">
          <AboutDemo />
        </div>
        {/* skills */}
        <div className="order-3 col-span-2 lg:order-5 lg:row-span-2 lg:col-span-1">
          <SkillItem />
        </div>

        <div className="order-5 col-span-2 lg:order-6 lg:col-span-1 bg-neutral-50 rounded-xl lg:h-full">
          7
        </div>
        <div className="order-6 col-span-2 lg:order-7 lg:col-span-1 bg-neutral-50 rounded-xl lg:h-full">
          8
        </div>
        <div className="order-7 col-span-2 lg:order-8 lg:col-span-1 bg-neutral-50 rounded-xl lg:h-full">
          9
        </div>
      </div>
    </>
  );
};

export default Home;
