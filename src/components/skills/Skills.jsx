import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import SkillsCarousel from "./SkillsCarousel";

export default function ({ skillsRef }) {
  return (
    <section className="skills section" id="skills" ref={skillsRef}>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
      <SkillsCarousel />
    </section>
  );
}
