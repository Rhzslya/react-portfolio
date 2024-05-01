import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Validation from "./Validation";
export default function Contact({ contactRef }) {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation Form
  const [values, setValues] = useState({
    name: "",
    email: "",
    project: "",
  });

  function handleInput(event) {
    const updatedErrors = { ...errors };
    delete updatedErrors[event.target.name];
    setErrors(updatedErrors);

    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm("service_x950xda", "template_klowb1o", form.current, {
          publicKey: "lWjkfMEY5obPOaIK6",
        })
        .then(() => {
          form.current.reset();
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 2000);
          setErrors({});
          setValues({
            name: "",
            email: "",
            project: "",
          });
        })
        .catch((error) => {
          console.error("Error Sending Email");
        });
    } else {
      setIsSubmitted(false);
    }
  }

  return (
    <section className="contact section" id="contact" ref={contactRef}>
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Lets Talk</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk To Me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@gmail.com</span>

              <a
                href="mailto:examplemail@gmail.com.com"
                className="contact__button"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">08123456789</span>

              <a
                href="https://api.whatsapp.com/send?phone=62214480457=Hello, more information"
                className="contact__button"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>

              <a href="https://m.me/seira" className="contact__button">
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write My Project</h3>

          <form
            ref={form}
            onSubmit={handleValidation}
            className="contact__form"
            noValidate
          >
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert Your Name"
                onChange={handleInput}
              />
              {errors.name && (
                <small className="error__text">{errors.name}</small>
              )}
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert Your Email"
                onChange={handleInput}
              />
              {errors.email && (
                <small className="error__text">{errors.email}</small>
              )}
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write Your Project"
                onChange={handleInput}
              ></textarea>
              {errors.project && (
                <small className="error__text">{errors.project}</small>
              )}
            </div>

            <button className="button button--flex">
              Send Messages
              <svg
                fill="#000000"
                height="30px"
                width="30px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 495.003 495.003"
                className="button__icon"
              >
                <g id="XMLID_51_">
                  <path
                    id="XMLID_53_"
                    d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616
		l-67.6-32.22V456.687z"
                  />
                  <path
                    id="XMLID_52_"
                    d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422
		c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414
		l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956
		L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"
                  />
                </g>
              </svg>
            </button>
            {isSubmitted && <small className="success__text">Succes</small>}
          </form>
        </div>
      </div>
    </section>
  );
}
