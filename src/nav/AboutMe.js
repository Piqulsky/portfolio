import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaLink } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="about">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <button className="navbar-button">Michał Pikulski</button>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/about">
            <button className="navbar-button">About Me</button>
          </Link>
          <Link to="/projects">
            <button className="navbar-button">Projects</button>
          </Link>
        </div>
      </nav>

      {/* Separator */}
      <div className="separator"></div>
      <h1>PAGE IN DEVELOPMENT</h1>
      {/* Footer */}
      <footer className="footer">
        <a
          href="https://www.linkedin.com/in/piqulsky/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="white" />
        </a>
        <a
          href="https://linktr.ee/Piqulsky"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink size={30} color="white" />
        </a>
      </footer>
    </div>
  );
}

export default AboutMe;
