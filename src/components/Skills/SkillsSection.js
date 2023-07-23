import React from "react";
import "./SkillsSection.css";
import Header from "../header/Header";
import SkillTab from "./Skill-item/SkillTab";
import {
  HTMLLogo,
  CSSLogo,
  BootstrapLogo,
  JavaScriptLogo,
  ReactLogo,
  AngularLogo,
  NodeLogo,
  ExpressLogo,
  MongodbLogo,
  NpmLogo,
  GitLogo,
  TypeScriptLogo,
  NestJsLogo,
} from "../../assets/logos";

const SkillsSection = () => {
  const allSkills = [
    {
      iconClass: "html-class",
      name: "HTML/HTML5",
      logo: <HTMLLogo />,
    },
    {
      iconClass: "css-class",
      name: "CSS/CSS3",
      logo: <CSSLogo />,
    },
    {
      iconClass: "bootstrap-class",
      name: "Bootstrap",
      logo: <BootstrapLogo />,
    },
    {
      logo: <JavaScriptLogo />,
      iconClass: "",
      name: "JavaScript",
    },
    {
      logo: <TypeScriptLogo />,
      iconClass: "",
      name: "TypeScript",
    },
    {
      logo: <ReactLogo />,
      iconClass: "react-class",
      name: "ReactJs",
    },
    {
      logo: <AngularLogo />,
      iconClass: "angular-class",
      name: "Angular",
    },
    {
      logo: <NodeLogo />,
      iconClass: "node-class",
      name: "NodeJs",
    },
    {
      logo: <ExpressLogo />,
      iconClass: "",
      name: "Express",
    },
    {
      logo: <NestJsLogo />,
      iconClass: "",
      name: "NestJs",
    },
    {
      logo: <MongodbLogo />,
      iconClass: "",
      name: "MongoDB",
    },
    {
      logo: <NpmLogo />,
      iconClass: "npm-class",
      name: "NPM",
    },
    {
      logo: <GitLogo />,
      iconClass: "",
      name: "Git",
    },
  ];
  return (
    <section className="skills-section" id="skills">
      <Header header={"Skills"} />
      <article className="flex-center-center">
        {allSkills.map((skill) => (
          <SkillTab
            key={skill.name}
            icon={skill.icon}
            iconClass={skill.iconClass}
            name={skill.name}
            logo={skill.logo}
          />
        ))}
      </article>
    </section>
  );
};

export default SkillsSection;
