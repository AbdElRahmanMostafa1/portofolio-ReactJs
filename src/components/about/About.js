import React, { Fragment } from "react";
import "./About.css";
import Header from "../header/Header";
import personalImage from "../../assets/images/AbdoPicture.jpeg";
import Typewriter from "typewriter-effect";
import abdoCV from "../../assets/pdf/AbdElRahman-Mostafa.pdf";
import SkillTab from "../Skills/Skill-item/SkillTab";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const experience = [
    {
      companyImg:
        "https://www.breachsecurenow.com/wp-content/uploads/2021/06/BSN-Logo-Website.png",
      companyName: "Breach Secure Now",
      jobTitle: "Frontend Engineer",
      startDate: "January, 2024",
      endDate: "Present",
      companyCityLocation: "New York",
      companyCountryLocation: "USA",
      workingSite: "(Remote)",
      techStack: [
        "ReactJs",
        "Material UI",
        "Redux toolkit",
        "Redux",
      ],
    },
    {
      companyImg:
        "https://media.licdn.com/dms/image/C4D0BAQHtEtHdE183Zg/company-logo_200_200/0/1607944766740?e=2147483647&v=beta&t=hhZ2fDqXwXBP-ao6d1fUYevSF226dZxnzlxYsoFAHSA",
      companyName: "CryptDev",
      jobTitle: "Frontend Engineer",
      startDate: "July, 2022",
      endDate: "December, 2023",
      companyCityLocation: "Athens",
      companyCountryLocation: "Greece",
      workingSite: "(Remote)",
      techStack: [
        "ReactJs",
        "React Native",
        "bootstrap",
        "Redux toolkit",
        "Redux",
      ],
    },
    {
      companyImg:
        "https://media.licdn.com/dms/image/C4D0BAQH9h8GvaOxJBg/company-logo_200_200/0/1671982620194/tech_natives_logo?e=1710979200&v=beta&t=PLCEpGF2Jlg-DKg-_GuJMG161to-0C6SJiPDXJHrL74",
      companyName: "TechNatives",
      jobTitle: "Full Stack Engineer",
      startDate: "October, 2022",
      endDate: "November, 2023",
      companyCityLocation: "Alexandria",
      companyCountryLocation: "Egypt",
      workingSite: "(Remote)",
      techStack: [
        "Angular",
        "bootstrap",
        "NodeJs",
        "NestJs",
        "TypeORM",
        "Sequelize",
        "Docker",
      ],
    },
    {
      companyImg:
        "https://dominioneg.com/wp-content/uploads/2021/08/cropped-dom-01-250x200.png",
      companyName: "Dominion Industrial Solutions",
      jobTitle: "Full Stack Engineer",
      startDate: "August, 2021",
      endDate: "June, 2022",
      companyCityLocation: "Cairo",
      companyCountryLocation: "Egypt",
      workingSite: "",
      techStack: [
        "ReactJs",
        "bootstrap",
        "NodeJs",
        "Express",
        "Mongoose",
        "MongoDB",
        "Robot Operating System(ROS)",
      ],
      brief: "Build Web Apps and integrate with AI and Machine Learning Models",
    },
    {
      companyImg:
        "https://media.licdn.com/dms/image/C4E0BAQErANnbTVg2CQ/company-logo_200_200/0/1519884215249?e=2147483647&v=beta&t=onlKxJcf8AO8VJcf3yU567zyjGx-t5lqD5DAPcXRoFc",
      companyName: "Appgain",
      jobTitle: "Frontend Engineer",
      startDate: "December, 2020",
      endDate: "July, 2021",
      companyCityLocation: "Cairo",
      companyCountryLocation: "Egypt",
      workingSite: "",
      techStack: [
        "ReactJs",
        "React Native",
        "bootstrap",
        "Redux",
        "Redux Saga",
      ],
      brief:
        "First Arabic Donation App (IKhair Dashboard), ...etc (confidential)",
    },
  ];

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
                      "Frontend Engineer",
                      "Backend Engineer",
                      "Full Stack Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            }{" "}
          </h2>
          <p>
            A self-motivated IT professional with huge knowledge and proficiency
            in HTML, CSS, JavaScript, ReactJs, NodeJs, Express, NestJs(Framework
            for NodeJs), MongoDB (Database), responsive web development and
            strong skills and ability in writing clean and efficient code,
            little experience with MySQL.
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
      <Header header={"Work Experience"} />
      <section
        className="main-section"
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        {experience.map((job, index) => {
          const {
            companyCityLocation,
            companyCountryLocation,
            companyImg,
            companyName,
            endDate,
            jobTitle,
            startDate,
            techStack,
            workingSite,
            brief,
          } = job;
          return (
            <Fragment key={companyName}>
              <article className="job-wrapper">
                <div className="company-img-wrapper">
                  <LazyLoadImage
                    className="company-img"
                    effect="blur"
                    width={"100px"}
                    height="100px"
                    src={companyImg}
                    alt={companyName}
                  />
                </div>

                <div>
                  <h2 className="">{companyName}</h2>
                  <p className="job-title bold">{jobTitle}</p>
                  <div className="job-content">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      color="brown"
                      style={{ marginRight: "2px" }}
                    />
                    <span>
                      {startDate} -- {endDate}
                    </span>{" "}
                    <br />
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color="brown"
                      style={{ marginRight: "2px" }}
                    />
                    <span>
                      {companyCityLocation},{" "}
                      <span className="bold">{companyCountryLocation}</span>{" "}
                      {workingSite}
                    </span>
                    <br />
                    <span className="bold">Tech Stack:</span>{" "}
                    {techStack.map((stack, i) => (
                      <Fragment key={stack}>
                        {stack}
                        {i < techStack.length - 1 && <>, </>}
                      </Fragment>
                    ))}
                    {brief && (
                      <p>
                        <span className="bold">Brief: </span>
                        <span> {brief} </span>
                      </p>
                    )}
                  </div>
                </div>
              </article>
              {index < experience.length - 1 && (
                <div
                  style={{
                    width: "90%",
                    marginTop: "10px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "2px",
                    backgroundColor: "rgb(155 153 153)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              )}
            </Fragment>
          );
        })}
      </section>
    </section>
  );
};

export default About;
