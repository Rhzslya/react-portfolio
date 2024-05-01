import React from "react";

export default function Info({ projectData }) {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years</span>
      </div>
      <div className="about__box">
        <i className="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">{projectData.length} Project</span>
      </div>
      <div className="about__box">
        <i className="uil uil-users-alt about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}
