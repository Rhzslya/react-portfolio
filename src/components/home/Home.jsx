import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

export default function Home({ homeRef, children }) {
  return (
    <section className="home section" ref={homeRef} id="home">
      <div className="home__container container grid">
        <div className="home__content grid">{children}</div>
        <ScrollDown />
      </div>
    </section>
  );
}
