import React from "react";
import "./SkillTab.css";

const SkillTab = ({ icon, iconClass, logo, name }) => {
  return (
    <span className="skill-tab">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <p style={{ textAlign: "center", margin: "auto", width: "75px" }}>
        {icon && <i className={`icon fa-brands fa-${icon} ${iconClass}`}></i>}
        {logo && <small> {logo} </small>}
      </p>
      <small style={{ textAlign: "center", display: "block" }}>{name}</small>
    </span>
  );
};

export default SkillTab;
