import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";

function ProhibitionTime() {
  return (
    <div className="ProhibitionTime">
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
          src={`${process.env.PUBLIC_URL}/projects/prohibition_time.jpg`}
          alt="Prohibition Time"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>PROHIBITION TIME©</h1>
        <p>
          <strong>Description:</strong> “Prohibition Time” is an online
          multiplayer game. The game combines elements of the social deduction
          game “Mafia” (also known as “Werewolf”) extended by our team with
          cards and special actions.
        </p>
        <p>
          <strong>Role:</strong> Backend developer
        </p>
        <p>
          <strong>Time:</strong> Oct 2021 - Mar 2023
        </p>
        <p>
          <strong>Stage:</strong> Completed
        </p>
        <p>
          <strong>See at:</strong>{" "}
          <a
            href="https://www.youtube.com/@prohibitiontimegame9777"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </p>

        <h2>About the Game</h2>
        <p>
          “Prohibition Time” is a social browser game based on deceiving skills.
          Each player is assigned a role and a task: to be as convincing and
          trustworthy as possible. The player’s ability to persuade, manipulate,
          work in a group, and especially to read others’ intentions, is key.
          There are multiple ways to win:
        </p>
        <ul>
          <li>
            Congressmen win by enacting 5 prohibition policies or sending Al
            Capone to jail.
          </li>
          <li>
            Mafiosos and Al Capone win by enacting 6 anti-prohibition policies
            or electing Al Capone for speaker after 3 anti-prohibition policies.
          </li>
        </ul>

        <h2>Game Rules</h2>
        <p>
          Each turn starts with an election, and the president passes on,
          nominating a new speaker. Players vote, and if the vote passes, they
          proceed with the legislative session where cards are drawn and
          selected to fulfill policies.
        </p>
        {/* Add more sections as per the PDF content for this project */}

        <h2>Special Actions</h2>
        <ul>
          <li>
            <strong>Policy Peek:</strong> Allows the president to look at the
            next three cards.
          </li>
          <li>
            <strong>Send To Jail:</strong> President selects one player to be
            eliminated.
          </li>
          <li>
            <strong>Bribe:</strong> President selects a one-round president
            outside of regular order.
          </li>
          <li>
            <strong>Identity Check:</strong> Allows the president to check if
            one person belongs to the mafia.
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

export default ProhibitionTime;
