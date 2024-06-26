import React from "react";
import "./scrollup.css";
import { sectionsId } from "../header/sectionsId";

export default function ScrollUp({ handleNavLinkClick }) {
  // Scroll
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });

  return (
    <a
      href="#"
      className="scrollup"
      onClick={(e) => {
        e.preventDefault();
        handleNavLinkClick(`#home`);
      }}
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}
