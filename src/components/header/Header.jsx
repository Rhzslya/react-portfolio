import React, { useState, useEffect } from "react";
import "./header.css";
import { sectionsId } from "./sectionsId";
import { iconsNav } from "./iconsNav";
import LogoNav from "../../asset/logo-navbar.png";
export default function Header({
  scrollHeader,
  handleNavLinkClick,
  children,
  display,
  setDisplay,
  height,
  setHeight,
}) {
  const [Toggle, showMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Functon to determine the active section when scrolling
  const determineActiveSection = () => {
    for (let i = sectionsId.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionsId[i]);

      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveNav(`#${sectionsId[i]}`);
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={"header" + (scrollHeader ? " scroll-header" : "")}>
      <nav className="nav container">
        <a href="">
          <img className="nav__logo" src={LogoNav} alt="" />
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {sectionsId.map((sectionId, i) => (
              <li key={i} className="nav__item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(`#${sectionId}`);
                  }}
                  className={
                    activeNav === `#${sectionId}`
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className={iconsNav[i]}></i>
                  {sectionId}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => {
              setDisplay("set-display");
              setHeight("");
              showMenu(!Toggle);
            }}
          ></i>
        </div>
        <div className="nav__toggle">
          <i
            className="uil uil-apps"
            onClick={() => {
              setHeight("set-height");
              setDisplay("");
              showMenu(!Toggle);
            }}
          ></i>
        </div>
        {children}
      </nav>
    </header>
  );
}
