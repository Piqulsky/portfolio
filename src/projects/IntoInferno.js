import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";

function IntoInferno() {
  return (
    <div className="IntoInferno">
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
          src={`${process.env.PUBLIC_URL}/projects/into_inferno.jpg`}
          alt="Into Inferno"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>INTO INFERNO©</h1>
        <p>
          <strong>Description:</strong> “Into Inferno” is a 6-player board game
          set in the world of Dante’s "Divine Comedy". The gameplay adapts the
          roguelike genre from video games, randomizing each game with various
          cards that affect the current and next attempts to win.
        </p>
        <p>
          <strong>Role:</strong> Sole creator
        </p>
        <p>
          <strong>Time:</strong> Oct 2023 - Present
        </p>
        <p>
          <strong>Stage:</strong> In playtesting
        </p>
        <p>
          <strong>See at:</strong>{" "}
          <a
            href="https://screentop.gg/@drummermichal/into-inferno"
            target="_blank"
            rel="noopener noreferrer"
          >
            Screentop.gg
          </a>
        </p>

        <h2>About the Game</h2>
        <p>
          "Into Inferno" is a board game that brings the roguelike video game
          genre to a tabletop experience. The game supports 1-6 players and
          features over 300 unique cards. Set in Dante Alighieri’s Inferno,
          players journey through the nine circles of Hell, encountering circle
          guardians and historical figures described in the epic poem. Players
          race to defeat Lucifer, and any player who dies must restart from the
          first circle of Hell with only their next inventory.
        </p>

        <h2>Gameplay and Rules</h2>
        <p>
          "Into Inferno" requires a board, six soul cards, six pawns, two dice,
          and various card decks. Guardians and Lucifer are placed at specific
          locations on the board, remaining there for the entire game. Each turn
          begins with a dice roll, determining how many spaces the player moves.
          Players draw cards from the appropriate circle deck based on their
          location and resolve the card's effects.
        </p>
        <p>
          The nature of the game ensures that no player can reach the third
          circle without experiencing a few setbacks, as players must increase
          their strength and equipment through multiple attempts.
        </p>

        <h2>Soul Cards and Inventory</h2>
        <p>
          Each player has a soul card containing stats like Health, Strength,
          and Wealth. These stats have two markers: one for starting value and
          one for the current value, which resets upon death. Players organize
          their inventory into three categories:
        </p>
        <ul>
          <li>
            <strong>Current Inventory:</strong> Items the player can use
            immediately, discarded upon death.
          </li>
          <li>
            <strong>Next Inventory:</strong> Items accessible only after the
            player's next respawn.
          </li>
          <li>
            <strong>Permanent Inventory:</strong> Items unaffected by death and
            usable throughout the game.
          </li>
        </ul>

        <h2>Card Types</h2>
        <p>
          The game includes various card types, each with unique abilities,
          including:
        </p>
        <ul>
          <li>
            <strong>Guardians:</strong> Static cards placed on specific spaces
            at the start of the game.
          </li>
          <li>
            <strong>Companions, Finds, Blessings, Curses:</strong> These cards
            go into the player's inventory.
          </li>
          <li>
            <strong>Enemies, Places:</strong> Cards that remain on the board
            until they are defeated or removed by other effects.
          </li>
        </ul>
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

export default IntoInferno;
