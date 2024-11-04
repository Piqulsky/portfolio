import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";

function Razem() {
  return (
    <div className="Razem">
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
          src={`${process.env.PUBLIC_URL}/projects/razem_rpg.jpg`}
          alt="Razem RPG"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>RAZEM RPG©</h1>
        <p>
          <strong>Description:</strong> “Razem” is a universal role-playing game
          system based on a flexible six-sided dice rolling system. It can adapt
          to various game settings, allowing players to become protagonists in a
          dynamic story.
        </p>
        <p>
          <strong>Role:</strong> Sole creator
        </p>
        <p>
          <strong>Time:</strong> Jun 2023 - Sep 2023
        </p>
        <p>
          <strong>Stage:</strong> Prior to playtesting
        </p>

        <h2>About the Game System</h2>
        <p>
          "Razem" is designed as a modular RPG system that emphasizes
          player-driven storytelling. It provides the flexibility to accommodate
          various genres and settings, from fantasy worlds to futuristic
          universes, enabling both players and game masters (GMs) to shape the
          narrative actively.
        </p>
        <p>
          The game system uses a unique six-sided dice mechanic that allows
          players to interpret outcomes based on their character’s skills,
          traits, and in-game events. The modular design makes it easy to
          incorporate new settings and mechanics.
        </p>

        <h2>Core Mechanics</h2>
        <p>
          The game employs a simple dice-rolling system that resolves actions
          and determines outcomes based on character abilities. Players can
          customize their characters with skills and special traits, adding
          depth to the role-playing experience.
        </p>
        <ul>
          <li>
            <strong>Dice Rolling:</strong> A six-sided dice is used to determine
            success, with modifiers based on character skills and the difficulty
            of actions.
          </li>
          <li>
            <strong>Character Customization:</strong> Players can choose or
            create unique traits, backgrounds, and abilities for their
            characters.
          </li>
          <li>
            <strong>Story-Driven Gameplay:</strong> Emphasis on narrative
            flexibility, allowing players and GMs to collaboratively create
            evolving stories.
          </li>
        </ul>

        <h2>Adaptable Game Settings</h2>
        <p>
          "Razem" includes various modules that enable players to explore
          different genres, such as fantasy, sci-fi, horror, and more. Each
          setting module provides unique rules and features, ensuring each game
          is tailored to its specific theme.
        </p>

        <h2>GM Tools</h2>
        <p>
          To aid the game master, "Razem" offers comprehensive GM tools,
          including:
        </p>
        <ul>
          <li>
            <strong>Scenario Builder:</strong> A guide to help GMs create
            engaging scenarios and plotlines.
          </li>
          <li>
            <strong>NPC Generator:</strong> Allows quick generation of
            non-player characters with customizable traits.
          </li>
          <li>
            <strong>World-Building Tips:</strong> Resources and templates for
            creating immersive game worlds.
          </li>
        </ul>

        <h2>Playtesting and Development</h2>
        <p>
          The system is currently in development and will enter playtesting
          soon. Feedback from early users will shape final adjustments to
          gameplay mechanics, ensuring an accessible and immersive experience
          for both new and experienced players.
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

export default Razem;
