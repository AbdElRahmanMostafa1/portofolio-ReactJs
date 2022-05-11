import React from "react";
import "./SkillsSection.css";
import Header from "../header/Header";
import SkillTab from "./Skill-item/SkillTab";
import ExpressLogo from "../../assets/logos/ExpressLogo";
import JavaScriptLogo from "../../assets/logos/JavaScriptLogo";
import MongodbLogo from "../../assets/logos/MongodbLogo";

const SkillsSection = () => {
  const allSkills = [
    {
      icon: "html5",
      iconClass: "html-class",
      name: "HTML/HTML5",
    },
    {
      icon: "css3",
      iconClass: "css-class",
      name: "CSS/CSS3",
    },
    {
      icon: "bootstrap",
      iconClass: "bootstrap-class",
      name: "Bootstrap",
    },
    {
      // icon: "js-square",
      logo: <JavaScriptLogo />,
      iconClass: "",
      name: "JavaScript",
    },
    {
      icon: "react",
      iconClass: "react-class",
      name: "ReactJs",
    },
    {
      icon: "angular",
      iconClass: "angular-class",
      name: "Angular",
    },
    {
      icon: "node",
      iconClass: "node-class",
      name: "NodeJs",
    },
    {
      logo: <ExpressLogo />,
      iconClass: "",
      name: "Express",
    },
    {
      logo: <MongodbLogo />,
      iconClass: "",
      name: "MongoDB",
    },
    {
      icon: "npm",
      iconClass: "npm-class",
      name: "NPM",
    },
    {
      icon: "git-square",
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
        {/* <SkillTab name={"Express"} logo={<ExpressLogo />} /> */}
        {/* <ExpressLogo /> */}
      </article>
    </section>
  );
};

export default SkillsSection;
