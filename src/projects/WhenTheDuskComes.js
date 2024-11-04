import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";

function WhenTheDuskComes() {
  return (
    <div className="WhenTheDuskComes">
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
          src={`${process.env.PUBLIC_URL}/projects/when_the_dusk_comes.jpg`}
          alt="When The Dusk Comes"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>WHEN THE DUSK COMES©</h1>
        <p>
          <strong>Description:</strong> “When the Dusk Comes” is a 2D advanced
          clicker game where the player tries to save as many people as possible
          before the apocalypse. The game combines a simple mechanic of button
          clicking with a broad system of saving humanity, heritage, and
          technology trees.
        </p>
        <p>
          <strong>Role:</strong> Leader, designer, developer
        </p>
        <p>
          <strong>Time:</strong> 24 hours during programming marathon in
          December 2023
        </p>
        <p>
          <strong>Awards:</strong> 2nd place at "Hackathon SCI 2023”
        </p>
        <p>
          <strong>Stage:</strong> Completed
        </p>
        <p>
          <strong>See at:</strong>{" "}
          <a
            href="https://piqulsky.itch.io/whentheduskcomes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Itch.io
          </a>
        </p>

        <h2>About the Game</h2>
        <p>
          "When the Dusk Comes" is a high-stakes game set on the last day before
          the apocalypse. The player has 15 minutes to save as many people as
          possible, using strategy to increase their total score by preserving
          both humanity and its heritage.
        </p>
        <p>
          The game encourages a fast-paced approach, focusing on building
          shelters, expanding them, and managing rations to sustain as many
          people as possible. Additionally, players can focus on saving
          significant cultural relics and advancing through a technology tree to
          improve their rescue efforts.
        </p>

        <h2>Gameplay Mechanics</h2>
        <p>
          The player must manage resources, including funds for rations and
          workers, and strategically allocate these resources to save humanity
          effectively. Significant gameplay elements include:
        </p>
        <ul>
          <li>
            <strong>Shelters and Rations:</strong> Build and expand shelters
            while managing rations for survival.
          </li>
          <li>
            <strong>Relics:</strong> Secure cultural relics by advancing in the
            technology tree and spending resources.
          </li>
          <li>
            <strong>Technology:</strong> Progress through technology to unlock
            passive income, which aids resource gathering and preservation.
          </li>
        </ul>

        <h2>Human Heritage Preservation</h2>
        <p>
          Besides saving people, the player must also focus on rescuing
          significant figures and relics, like literature, paintings, and
          sculptures, to preserve humanity’s cultural heritage. Great figures
          contribute to resource generation when fully invested in, helping
          sustain humanity before the last sunset.
        </p>

        <h2>Strategy and Research</h2>
        <p>
          Players conduct research and advancements that boost resource
          gathering efficiency. This includes multipliers on resources and
          automated systems that enhance gameplay as the timer runs down.
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

export default WhenTheDuskComes;
