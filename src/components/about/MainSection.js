import React from "react";
import "./MainSection.css";
import Header from "../section-header/Header";
import personalImage from "../../assets/29906200102159.jpeg";
import Typewriter from "typewriter-effect";

const MainSection = () => {
  return (
    <section className="main-section" id="about">
      <Header header="About Me" />
      <article className="main-section-article">
        <div style={{ width: "80%" }}>
          <h1>Hello, I'm AbdElRahman Mostafa </h1>
          <h3 style={{ marginLeft: "10px" }}>
            I'm a{" "}
            {
              <span style={{ color: "green" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Deleveloper",
                      "Backend Deleveloper",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            }{" "}
          </h3>
          <p style={{}}>
            A self-motivated IT professional with huge knowledge and proficiency
            in HTML, CSS, JavaScript, ReactJs, NodeJs, Express (Framework for
            NodeJs), MongoDB (Database) and mobile responsive web development
            and strong skills and ability in writing clean and efficient code,
            little experience with MySQL.
          </p>
          <a
            href="../assets/pdf/Programming-CV.pdf"
            // target="_blank"
            download={"AbdElRahman Mostafa CV"}
          >
            Download
          </a>
        </div>
        <img src={personalImage} alt="Personal" />
      </article>
    </section>
  );
};

export default MainSection;
