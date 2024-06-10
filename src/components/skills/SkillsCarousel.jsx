import React from "react";
import { logoSkills, textSkills } from "./logo/LogoSkills";
export default function SkillsCarousel() {
  return (
    <>
      <div className="scroll container">
        <ul>
          {textSkills.map((item, i) => (
            <li key={i} className="content__skills-text">
              <p href="" className="skills-text">
                {item}
              </p>
            </li>
          ))}
        </ul>

        <ul>
          {textSkills.map((item, i) => (
            <li key={i} className="content__skills-text">
              <p href="" className="skills-text">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="scroll imgbx container">
        <ul className="ul__hover">
          {logoSkills.map((item, i) => (
            <li key={i} className="content__skills-img">
              <div href="" className="skills-img">
                <img src={item} alt={item} />
              </div>
            </li>
          ))}
        </ul>

        <ul>
          {logoSkills.map((item, i) => (
            <li key={i}>
              <div href="">
                <img src={item} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
