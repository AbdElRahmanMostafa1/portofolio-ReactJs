import React from "react";
import "./ProjectContainer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectContainer = ({ link, image, imageAlt, title, techs }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noreferrer"
      className="project-container"
    >
      <LazyLoadImage
        effect="blur"
        width={"250px"}
        height="auto"
        src={image}
        alt={imageAlt}
      />
      <h3 className="title"> {title} </h3>
      <h4>Technologies Used</h4>
      <div className="flex-center-center techs-container">
        {techs.map((tech) => (
          <span key={tech}> {tech} </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectContainer;
