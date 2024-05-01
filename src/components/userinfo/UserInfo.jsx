import React from "react";
import Clock from "./Clock";
import Repo from "./Repo";
import Music from "./Music";
import "./userinfo.css";

export default function UserInfo() {
  return (
    <div className="user-info">
      <div className="container__info">
        <Clock />
        <Repo />
      </div>
    </div>
  );
}
