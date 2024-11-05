import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaLink } from "react-icons/fa";
import "./AboutMe.css";

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

      {/* About Me Section */}
      <div className="about-me-page">
        <h2>About Me</h2>
        <p>
          Games have long been underappreciated, yet they hold immense potential
          as tools for change. As one of the most immersive media available
          today, video games uniquely blend storytelling, education, and
          entertainment. Well-crafted games can engage players deeply, making
          them both enjoyable and impactful. With applications in psychology and
          neuroscience, games are poised to shape the future of therapy,
          education, and social change, advancing these fields in meaningful
          ways.
        </p>
        <p>
          Hello! My name is Michał Pikulski, and I am a passionate game designer
          and developer. I am dedicated to creating games that are beneficial to
          the players. I'm 19 years old and already I have created projects,
          both solo and in teams, that are advanced and tap into what attracts
          players to games.
        </p>
        <p>
          Currently I am studying at Breda University of Applied Sciences in the
          Netherlands. Through the Creative Media and Game Technologies course,
          I am learning how to create games that are not only fun but also
          interact with players on multiple levels - emotionally, socially,
          physically and psychologically.
        </p>
      </div>

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
