import React, { useState } from "react";
import Close from "../../asset/close.svg";
import Link from "../../asset/link.svg";
export default function ProjectItems({ img, name, link, details, motion }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="project__item">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
        <img src={img} alt="" className="project__img" />
        <div className="project__hover" onClick={toggleModal}>
          <h3 className="project__title">{name}</h3>
        </div>
      </motion.div>
      {modal && (
        <div className="project__modal">
          <div className="project__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{name}</h3>
            <img src={img} alt="" className="modal__img" />
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <img src={icon} alt={title} className="detail__icon" />
                    <span className="item__title">{title}</span> :{" "}
                    {title === "Preview" ? (
                      <a
                        href={desc}
                        target="_blank"
                        className="item__desc item__link"
                      >
                        {desc}
                      </a>
                    ) : (
                      <span className="item__desc">{desc}</span>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="modal__box-button">
              <button className="modal__button-link">
                <a href={link} target="_blank">
                  Preview <i className="uil uil-link link-modal"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
