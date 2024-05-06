import React from "react";
import { logoSkills, textSkills } from "./logo/LogoSkills";
export default function SkillsCarousel() {
  return (
    <>
      <div className="scroll container">
        <ul>
          {textSkills.map((item, i) => (
            <li key={i} className="content__skills-text">
              <a href="" className="skills-text">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <ul>
          {textSkills.map((item, i) => (
            <li key={i} className="content__skills-text">
              <a href="" className="skills-text">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="scroll imgbx container">
        <ul>
          {logoSkills.map((item, i) => (
            <li key={i} className="content__skills-img">
              <a href="" className="skills-img">
                <img src={item} alt={item} />
              </a>
            </li>
          ))}
        </ul>

        <ul>
          {logoSkills.map((item, i) => (
            <li key={i}>
              <a href="">
                <img src={item} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
