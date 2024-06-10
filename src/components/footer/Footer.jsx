import React, { useState } from "react";
import "./footer.css";
import { footerSectionsId } from "../header/sectionsId";
import LogoNav from "../../asset/logo-navbar.png";
export default function Footer({ handleNavLinkClick }) {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="box__logo">
          <a href="">
            <img className="footer__logo" src={LogoNav} alt="" />
          </a>
        </div>

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
          <a
            href="https://www.facebook.com/profile.php?id=100077692014108"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/rhzslya/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://discordapp.com/users/918163786341445693"
            className="footer__social-link"
            target="_blank"
          >
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
