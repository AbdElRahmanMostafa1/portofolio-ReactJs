import React from "react";
import "./About.css";
import Header from "../header/Header";
import personalImage from "../../assets/29906200102159.jpeg";
import Typewriter from "typewriter-effect";
import abdoCV from "../../assets/pdf/AbdElRahman-programming-CV.pdf";
import SkillTab from "../Skills/Skill-item/SkillTab";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  return (
    <section className="main-section" id="about">
      <Header header="About Me" />
      <article className="main-section-article">
        <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
          <h1>Hello, I'm AbdElRahman Mostafa </h1>
          <h2 style={{ marginLeft: "10px" }}>
            I'm a{" "}
            {
              <span style={{ color: "green" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Backend Developer",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            }{" "}
          </h2>
          <p style={{}}>
            A self-motivated IT professional with huge knowledge and proficiency
            in HTML, CSS, JavaScript, ReactJs, NodeJs, Express (Framework for
            NodeJs), MongoDB (Database), responsive web development and strong
            skills and ability in writing clean and efficient code, little
            experience with MySQL.
          </p>
          <a
            href={abdoCV}
            download={"AbdElRahman-Mostafa-CV"}
            style={{
              borderRadius: "5px",
              alignSelf: "center",
              display: "block",
            }}
          >
            <SkillTab name={"Download My CV"} style={{ padding: "20px" }} />
          </a>
        </div>
        <LazyLoadImage
          effect="blur"
          width={"226px"}
          height="300px"
          src={personalImage}
          alt="Personal"
        />
      </article>
    </section>
  );
};

export default About;
