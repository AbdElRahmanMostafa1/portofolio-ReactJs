import React from "react";
import Header from "../section-header/Header";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Header header={"Contact Me 😀"} />
      <article>
        <ul
          className="flex-center-center"
          style={{ justifyContent: "space-evenly" }}
        >
          <li>
            <a
              href="https://github.com/AbdElRahmanMostafa1"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abdelrahman-mostafa-605831183/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <p>
            <strong>Email:</strong> abdelrahman22.mostafa@gmail.com
          </p>
          <p>
            <strong>Phone 1:</strong> 01122695703
          </p>
          <p>
            <strong>Phone 2:</strong> 01093957807
          </p>
          <strong>Just Send me don't hesitate 😉</strong>
        </div>
      </article>
    </section>
  );
};

export default Contact;
