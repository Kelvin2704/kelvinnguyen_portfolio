import React from "react";
import AboutDemo from "../../components/About/About";
import ContactForm from "../../components/Contact";
import SkillItem from "../../components/Skills";
import Projects from "../../components/Projects";
import Social from "../../components/Social";
import Experiences from "../../components/Experiences";
import Marquee from "../../components/Marquee";

const Home = () => {
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
  ];
  return (
    <main className="bg-neutral-950 box-border">
      <div className="grid grid-cols-2 lg:grid-cols-4  w-full h-full xl:h-screen container p-2 lg:p-5 m-auto gap-2">
        <AboutDemo />
        <Experiences />
        <Projects />
        <ContactForm />
        <Social />
        <SkillItem />
      </div>
      <div className="text-neutral-50">
        <Marquee items={items}/>
      </div>
    </main>
  );
};

export default Home;
