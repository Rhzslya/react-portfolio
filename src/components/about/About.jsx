import React, { Children, useEffect, useRef } from "react";
import "./about.css";
import AboutImg from "../../asset/about.png";

import Info from "./Info";
import Description from "./Description";
import ButtonCV from "./ButtonCV";

export default function About({ aboutRef, children }) {
  return (
    <section className="about section" id="about" ref={aboutRef}>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">A Brief Intro... Who Am I?</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">{children}</div>
      </div>
    </section>
  );
}
