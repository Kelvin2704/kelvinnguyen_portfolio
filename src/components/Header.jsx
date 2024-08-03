import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop <= 0 || scrollTop < 50) {
        setIsTop(true);
      } else if (scrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
        setIsTop(false);
        
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

      
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${isHidden ? "-translate-y-full" : ""} ${
        isTop
          ? "bg-transparent text-neutral-900"
          : "bg-neutral-950 text-neutral-50"
      } header mx-auto fixed w-full md:p-4 z-[9999] transition-all bg-clip-padding backdrop-blur-md bg-opacity-15`}
    >
      <div
        className={`nav-wrapper relative font-custom font-normal flex justify-between items-center p-5 h-full w-full md:h-14 z-10 ${
          isOpen ? "text-neutral-50" : ""
        }`}
      >
        <a href="/" className="flex-1">
          <h1 className="text-4xl md:text-3xl font-custom font-black ">
            Kelvin Nguyen.
          </h1>
        </a>
        <nav className="hidden w-fit space-x-3 gap-2  lg:flex flex-1 justify-center items-center text-xl font-custom font-medium">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-btn hidden lg:flex flex-1 justify-end gap-2">
          <div className="links flex flex-row items-center justify-center gap-2">
            <FontAwesomeIcon size="lg" icon={faGithub} />
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </div>
          <button className=" justify-center flex items-center p-4 rounded-xl text-white bg-violet-800">
            <p>
              My Resume <FontAwesomeIcon icon={faFileAlt} />
            </p>
          </button>
        </div>
        <button
          className="lg:hidden flex justify-end items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } w-full top-0 left-0 absolute h-screen bg-neutral-900 text-neutral-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 z-0 flex items-center justify-center`}
      >
        <nav className="flex flex-col space-y-6 p-4 text-2xl justify-center items-center">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <button onClick={() => setIsOpen(false)}>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </button>
          <button onClick={() => setIsOpen(false)}>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </button>
          <button onClick={() => setIsOpen(false)}>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
