import React, { useState } from "react";
import "./footer.css";
import { footerSectionsId } from "../header/sectionsId";

export default function Footer({ handleNavLinkClick }) {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Seira</h1>

        <ul className="footer__list">
          {footerSectionsId.map((sectionId, i) => (
            <li key={i}>
              <a
                href=""
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(`#${sectionId}`);
                }}
              >
                {sectionId}
              </a>
            </li>
          ))}
          {/* <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li> */}
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-discord"></i>
          </a>
        </div>

        <span className="footer__copyright">
          &#169;Rizqi Sabilla. All rights reserved
        </span>
      </div>
    </footer>
  );
}
