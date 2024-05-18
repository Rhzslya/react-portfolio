import { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Data from "./components/home/Data";
import Social from "./components/home/Social";
import Info from "./components/about/Info";
import Description from "./components/about/Description";
import ButtonCV from "./components/about/ButtonCV";
import { projectData } from "./components/project/projectData";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import DarkMode from "./components/dark-mode/DarkMode";
import UserInfo from "./components/userinfo/UserInfo";
import ScrollDown from "./components/home/ScrollDown";
import CircleType from "./components/home/CircleType";

// Library
import { motion } from "framer-motion";
export default function App() {
  const [display, setDisplay] = useState("set-display");
  const [height, setHeight] = useState("");
  // Toggle Menu Apps

  const [activeNav, setActiveNav] = useState("#home");
  // Change Background Header
  const [scrollHeader, setScrollHeader] = useState(false);

  // Scroll Section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      if (!skillsRef.current) return;

      if (window.scrollY >= 80) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    setActiveNav(sectionId);

    const sectionElement = document.getElementById(sectionId.substring(1));

    if (sectionElement) {
      const offsetTop = sectionElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <>
        <UserInfo height={height} setHeight={setHeight} />
        <Header
          scrollHeader={scrollHeader}
          handleNavLinkClick={handleNavLinkClick}
          display={display}
          setDisplay={setDisplay}
          height={height}
          setHeight={setHeight}
        >
          <DarkMode display={display} setDisplay={setDisplay} />
        </Header>

        <main className="main">
          <Home homeRef={homeRef}>
            <div className="home__content grid">
              <Social />
              <div className="home__img">
                <CircleType />
              </div>
              <Data handleNavLinkClick={handleNavLinkClick} />
            </div>
            <ScrollDown handleNavLinkClick={handleNavLinkClick} />
          </Home>
          <About aboutRef={aboutRef}>
            <Info projectData={projectData} />
            <Description />
            <ButtonCV />
          </About>
          <Skills skillsRef={skillsRef} />
          <Qualification />
          <Project projectRef={projectRef} motion={motion} />
          <Contact contactRef={contactRef} />
          <Footer handleNavLinkClick={handleNavLinkClick} />
          <ScrollUp handleNavLinkClick={handleNavLinkClick} />
        </main>
      </>
    </Router>
  );
}
