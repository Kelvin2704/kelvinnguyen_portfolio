import React from "react";
import AboutDemo from "../../components/About/About";
import ContactForm from "../../components/Contact";
import SkillItem from "../../components/Skills";
import Projects from "../../components/Projects";
import Social from "../../components/Social";
import Experiences from "../../components/Experiences";

const Home = () => {
  return (
    <div className="bg-neutral-950">
      <div className="grid grid-cols-2 lg:grid-cols-4  w-full h-full xl:h-screen container p-2 lg:p-5 m-auto gap-2">
        <AboutDemo />
        <Experiences />
        <Projects />
        <ContactForm />
        <Social />
        <SkillItem />
      </div>
    </div>
  );
};

export default Home;
