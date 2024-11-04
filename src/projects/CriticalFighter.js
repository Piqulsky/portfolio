import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";

function CriticalFighter() {
  return (
    <div className="CriticalFighter">
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

      {/* Wide Photo */}
      <div className="project-photo">
        <img
          src={`${process.env.PUBLIC_URL}/projects/critical_fighter.jpg`}
          alt="Critical Fighter"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>CRITICAL FIGHTER©</h1>
        <p>
          <strong>Description:</strong> “Critical Fighter” is a 3D top-down
          fighting game concept set in the "Critical Role" universe, designed
          for up to 12 players. Each match offers a unique experience with
          random battlefields and a variety of characters.
        </p>
        <p>
          <strong>Role:</strong> Sole creator
        </p>
        <p>
          <strong>Time:</strong> Jan 2023 - May 2023
        </p>
        <p>
          <strong>Stage:</strong> In progress
        </p>

        <h2>About the Game</h2>
        <p>
          "Critical Fighter" is a multiplayer arena-style fighting game inspired
          by the "Critical Role" universe. Players choose from a roster of
          characters, each with unique abilities and fighting styles, and engage
          in fast-paced battles in various arenas.
        </p>
        <p>
          The game's design prioritizes strategic gameplay, allowing players to
          leverage each character's strengths and adapt to different battlefield
          environments.
        </p>

        <h2>Gameplay Mechanics</h2>
        <p>
          The gameplay focuses on player-versus-player combat, with each
          character having distinct abilities and attack styles. Key gameplay
          elements include:
        </p>
        <ul>
          <li>
            <strong>Character Abilities:</strong> Each character has unique
            abilities, with skills that can turn the tide in battles when used
            strategically.
          </li>
          <li>
            <strong>Randomized Battlefields:</strong> Battlefields are randomly
            generated, each with unique layouts and environmental challenges.
          </li>
          <li>
            <strong>Multiplayer:</strong> Designed for up to 12 players, the
            game offers a dynamic and engaging multiplayer experience.
          </li>
        </ul>

        <h2>Characters</h2>
        <p>
          The game features a variety of characters, each inspired by the
          "Critical Role" universe, with unique strengths and skills. Players
          must understand their character's abilities to effectively counter
          opponents and win battles.
        </p>

        <h2>Arena Design</h2>
        <p>
          Each arena in "Critical Fighter" is designed with interactive elements
          and obstacles that add complexity to the gameplay. Players can use the
          environment strategically, such as hiding behind objects or using high
          ground for an advantage.
        </p>

        <h2>Development and Future Plans</h2>
        <p>
          "Critical Fighter" is currently in the development phase. Future plans
          include adding more characters, refining gameplay mechanics, and
          expanding arena designs to create a well-rounded multiplayer
          experience.
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

export default CriticalFighter;
