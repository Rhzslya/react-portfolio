import React, { useState } from "react";
import Clock from "./Clock";
import Repo from "./Repo";
import Music from "./Music";
import "./userinfo.css";

export default function UserInfo({ height, setHeigth }) {
  const [inTop, setInTop] = useState("");

  window.addEventListener("scroll", function () {
    if (this.scrollY >= 560) {
      setInTop("hide-user-info");
    } else {
      setInTop("");
    }
  });
  return (
    <div className={`user-info ${height} ${inTop}`}>
      <div className="container__info">
        <Clock />
        <Repo />
      </div>
    </div>
  );
}
