import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";

function CoalInMyHeart() {
  return (
    <div className="CoalInMyHeart">
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
          src={`${process.env.PUBLIC_URL}/projects/coal_in_my_heart.jpg`}
          alt="Coal In My Heart"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>COAL IN MY HEART©</h1>
        <p>
          <strong>Description:</strong> “Coal in My Heart” is a 2D
          side-scrolling platformer game that mixes a fighting system with
          survival mechanics. The player has to fight swarms of living icicles
          and snowflakes to reach the heating system, guarded by a boss who must
          be defeated to fix it.
        </p>
        <p>
          <strong>Role:</strong> Sole creator
        </p>
        <p>
          <strong>Time:</strong> Dec 2023 - Jan 2024
        </p>
        <p>
          <strong>Stage:</strong> Completed
        </p>
        <p>
          <strong>See at:</strong>{" "}
          <a
            href="https://piqulsky.itch.io/coal-in-my-heart"
            target="_blank"
            rel="noopener noreferrer"
          >
            Itch.io
          </a>
        </p>

        <h2>About the Game</h2>
        <p>
          "Coal in My Heart" is a winter-themed side-scrolling platformer where
          the player embarks on a journey to fix a broken heating system during
          a harsh winter. The player encounters and battles various icy enemies,
          such as snowflakes and icicles, that are animated as if they are alive
          and have defensive capabilities.
        </p>
        <p>
          The ultimate goal is to reach the heating system at the end of the
          level, which is guarded by a boss. Defeating the boss allows the
          player to repair the heating system, symbolizing victory over the
          cold.
        </p>

        <h2>Gameplay Mechanics</h2>
        <p>
          "Coal in My Heart" combines combat and survival elements. Players must
          manage their character’s health, avoid freezing temperatures, and
          gather resources throughout the game.
        </p>
        <ul>
          <li>
            <strong>Combat:</strong> The player can engage in melee combat with
            various icy enemies that populate the levels.
          </li>
          <li>
            <strong>Survival:</strong> As temperatures drop, the player needs to
            manage warmth by collecting coal and fuel sources to survive the
            cold.
          </li>
          <li>
            <strong>Boss Battles:</strong> At the end of each level, a boss
            guards the heating system, posing a final challenge before the
            player can fix the heater.
          </li>
        </ul>

        <h2>Enemies</h2>
        <p>
          The game features unique enemies such as animated snowflakes and
          icicles, each with distinct movement patterns and attack methods.
          Players must strategize and use various tactics to defeat or avoid
          these enemies while progressing.
        </p>

        <h2>Resource Gathering</h2>
        <p>
          Throughout the game, players collect coal and other resources to
          maintain their warmth and health. This aspect introduces a layer of
          strategy, as players must decide when to conserve resources and when
          to use them.
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

export default CoalInMyHeart;
