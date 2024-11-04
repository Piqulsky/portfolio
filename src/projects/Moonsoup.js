import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";

function Moonsoup() {
  return (
    <div className="Moonsoup">
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
          src={`${process.env.PUBLIC_URL}/projects/moonsoup.jpg`}
          alt="Moonsoup"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>MOONSOUP©</h1>
        <p>
          <strong>Description:</strong> “Moonsoup” is a 2D simulator game about
          running a potion shop set in a medieval fantasy setting. The game
          combines logical puzzles and mini-games in a design that focuses on
          creating a casual and relaxing gameplay.
        </p>
        <p>
          <strong>Role:</strong> Leader, designer, developer
        </p>
        <p>
          <strong>Time:</strong> Oct 2022 - Jan 2023
        </p>
        <p>
          <strong>Stage:</strong> Completed
        </p>
        <p>
          <strong>See at:</strong>{" "}
          <a
            href="https://vimeo.com/888257966"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vimeo
          </a>
        </p>

        <h2>About the Game</h2>
        <p>
          “Moonsoup” is a top-down simulator game with a pixel art style set in
          a fantasy medieval setting. The gameplay focuses on brewing a variety
          of potions and selling them in the player’s potion store. It features:
        </p>
        <ul>
          <li>Broad brewing system</li>
          <li>Discovering numerous recipes</li>
          <li>Leveling in potion-making</li>
          <li>Ingredient preparation minigames</li>
          <li>Farming in the garden</li>
          <li>Quests containing fun story</li>
          <li>Selling controlled by simulated algorithm</li>
        </ul>

        <h2>Gameplay Overview</h2>
        <p>
          In "Moonsoup", the player controls Monn, a novice alchemist starting
          their own establishment. Throughout the game, they master
          potion-making skills, manage a garden for ingredient farming, and take
          orders from local patrons for magical potions.
        </p>
        <p>
          Seeds and ingredient preparation tools are available for purchase to
          enhance the shop's capabilities. Players experiment with various
          ingredients to uncover new recipes and increase profits.
        </p>

        <h2>Advanced Potion-Making</h2>
        <p>
          Players combine ingredients to create potion perks as described in the
          recipe book. These perks can interact to form new effects, allowing
          the creation of complex potions.
        </p>

        <h2>Minigames</h2>
        <p>
          "Moonsoup" features five minigames for ingredient preparation,
          including:
        </p>
        <ul>
          <li>
            <strong>Grinding:</strong> Keep the stone’s handle within a green
            range to progress.
          </li>
          <li>
            <strong>Infusing:</strong> Keep the target in the bowl while it
            moves randomly.
          </li>
          <li>
            <strong>Cutting:</strong> Guide the cursor along cuts with minimal
            misses.
          </li>
          <li>
            <strong>Distilling:</strong> Adjust the vial based on temperature
            changes.
          </li>
          <li>
            <strong>Drying:</strong> Control the fire temperature, keeping it in
            the green area.
          </li>
        </ul>

        <h2>Quest System</h2>
        <p>
          Quests provide specific potion requests with deadlines and backstory.
          Completing quests advances the player’s potion-making journey.
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

export default Moonsoup;
