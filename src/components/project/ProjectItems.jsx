import React, { useState } from "react";
import Close from "../../asset/close.svg";
export default function ProjectItems({ img, name, details }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="project__item">
      <img src={img} alt="" className="project__img" />

      <div className="project__hover" onClick={toggleModal}>
        <h3 className="project__title">{name}</h3>
      </div>

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

            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}
