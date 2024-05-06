import React from "react";
import "./home.css";

export default function Home({ homeRef, children }) {
  return (
    <section className="home section" ref={homeRef} id="home">
      <div className="home__container container grid">{children}</div>
    </section>
  );
}
