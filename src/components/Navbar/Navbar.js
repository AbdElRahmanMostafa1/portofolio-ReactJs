import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/A-Letter-PNG-Download-Image.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <LazyLoadImage
        effect="blur"
        width="60px"
        height={"60.16"}
        className="logo"
        src={Logo}
        alt="Abdo Logo"
      />
      <ul className="">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
