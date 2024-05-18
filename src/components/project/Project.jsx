import React, { useState, useEffect } from "react";
import ProjectItems from "./ProjectItems";
import "./project.css";
import Pagination from "./Pagination";
import Ryo from "../../asset/Ryo-Profile.png";
import fileIcon from "../../asset/bxs-file.svg";
import userIcon from "../../asset/bx-user-circle.svg";
import linkIcon from "../../asset/bx-link-external.svg";
import langIcon from "../../asset/bx-code-alt.svg";
import { projectData } from "./projectData";

export default function Project({ projectRef, motion }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentProjects = projectData.slice(indexOfFirstPost, indexOfLastPost);

  function handleSelectedPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setPostPerPage(2);
      } else {
        setPostPerPage(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="project section" id="project" ref={projectRef}>
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">My Recent Works</span>

      <div className="project__container container grid">
        {currentProjects.map((item) => {
          return <ProjectItems key={item.id} {...item} motion={motion} />;
        })}
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPost={projectData.length}
        onHandleSelectedPage={handleSelectedPage}
        currentPage={currentPage}
      />
    </section>
  );
}
