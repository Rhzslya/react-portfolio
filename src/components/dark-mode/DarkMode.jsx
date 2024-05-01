import React, { useState } from "react";
import "./darkmode.css";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";

export default function DarkMode({ Toggle, showMenu, display, setDisplay }) {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleMode = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <>
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleMode}
      />
      <label className={`dark_mode_label ${display}`} htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </>
  );
}
