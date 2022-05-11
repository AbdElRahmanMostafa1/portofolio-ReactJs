import React from "react";
import "./Navbar.css";
import Logo from "../../assets/A-Letter-PNG-Download-Image.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="Abdo Logo" />
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
