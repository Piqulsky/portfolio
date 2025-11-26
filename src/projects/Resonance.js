import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";
import NavBar from "../reusable/NavBar";
import Footer from "../reusable/Footer";
import YouTube from "react-youtube";

function Resonance() {
  return (
    <div className="Resonance">
      <NavBar />

      {/* Wide Photo */}
      <div className="project-photo">
        <img
          src={`${process.env.PUBLIC_URL}/projects/resonance.jpg`}
          alt="Resonance"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>RESONANCE</h1>
        <p>
          <strong>Description:</strong> “Resonance” A fast twin-stick action
          game. Use your telekinetic voice to lift and control objects and
          enemies, allowing you to shield yourself and fight! Escape the
          facility trying to keep you under its control.
        </p>
        <p>
          <strong>Role:</strong> Level designer, accessibility designer
        </p>
        <p>
          <strong>Recognition:</strong>{" "}
          <a href="https://dutchgameawards.nl/nominees/">
            Nominated for Dutch Game Awards 2025
          </a>
        </p>
        <p>
          <strong>Time:</strong> May 2024 - Jun 2024
        </p>
        <p>
          <strong>Stage:</strong> Completed
        </p>
        <p>
          <strong>See at:</strong>{" "}
          <a
            href="https://buas.itch.io/resonance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Itch
          </a>
        </p>

        <h2>About the Game</h2>
        <p>
          In "Resonance," players play as Maria - a young girl with telekinetic
          voice that was the reason why she was captured and locked away in a
          secret facility. She has grown angry in captivity and now uses her
          powers to escape. Player must navigate through the oppressive facility
          and kill fascist guards using the booming voice powers. By throwing
          enemies around and smashing them with blocks of concrete, player
          fights to reach the exit.
        </p>

        <h2>Level Design</h2>
        <p>
          This was my first experience working in a team that had a very set
          designation of roles, and also I have not been commited to level
          design to such a degree before. However, it all went very smoothly. I
          have been reponsible for delivering gameplay spaces and challenges
          that fit the mechanics and the narrative of the game.
          <ul>
            <li>
              Brainstormed and concepted on multiple possible level designs
            </li>
            <li>Created level layouts on paper and in Unreal Engine 5</li>
            <li>
              Scripted level ingredients such as sequenced doors and spawning
              systems
            </li>
            <li>
              Designed and coded system for managing loading level parts for
              optimization purposes
            </li>
            <li>
              Collaborated closely with environment artists to ensure cohesive
              level aesthetics
            </li>
            <li>
              Delivered a finished and polished level design for the final
              product
            </li>
          </ul>
          <YouTube videoId="5IsG_lnKgbU" />
        </p>

        <h2>Level Design Principles</h2>
        <p>
          In my level design, I have focused on several key principles to ensure
          that our team'secret vision for creating a gameplay providing
          experience of revenge on fascist guards is realized:
          <ul>
            <li>
              <strong>Experience:</strong> Creating an experience of breaking
              out of an oppressive facility has been a priority for this level
              and that's why the player encounters numerous features associated
              with jails, such as patrolling guard, alarm light, closing doors
              etc.
            </li>
            <br />
            <li>
              <strong>Player progression:</strong> Using linearity and
              one-directional alignment of rooms in the level I have ensured
              that player will always knnow where to go next and not get
              distracted by closing doors, which enhance the experience.
            </li>
            <br />
            <li>
              <strong>Onboarding:</strong> This was the first (and only) level
              of our game, which meant that it had to teach the player all the
              abilities of Maria. It was important to gradually introduce new
              challenges to the player that afford and require usage of specific
              abilities, which are explained in the tutorial pop-ups.
            </li>
            <br />
            <li>
              <strong>Space:</strong> To ensure compatibility with the gameplay
              that required a lot of movement and dodging, I have designed the
              level with tight metrics in mind, to offer the player just enough
              space to maneuver, but not too much to not take away from the
              oppressive experience that we aimed to evoke in the player.
            </li>
            <br />
            <li>
              <strong>Pacing:</strong> It was important to balance moments of
              high and low intensity in this fast-paced action game. I have
              designed the level to have rooms filled with itense combat,
              followed by brief moments of rest and collecting oneself, before
              progressing into another combat.
            </li>
            <br />
            <li>
              <strong>Balancing:</strong> To ensure that the level is
              challenging, yet fair, especially considering the onboarding
              section of the level, I have been playtesting thoroughly with
              players of different skill level. Results of those playtests have
              thoroughly iformed decisions on enemy placements, amount of usable
              objects, and room sizes.
            </li>
            <br />
            <li>
              <strong>Theme:</strong> The industrial, noir aesthetic of the
              level was a wonderful contribution of our environment artists, and
              I have made sure to collaborate tightly with them to ensure that
              the level design supports the intended visual theme. Usage of
              geometrical shapes, bars, moving fans, areas of movement limited
              by concrete blocks and metal structures all contribute to the
              industrial theme of the level.
            </li>
            <br />
            <li>
              <strong>Atmosphere:</strong> Our game design relied heavily on
              evoking powerful emotions of revenge on fascists and sympathy for
              Maria. To support this, we knew that contrasting noir lighting
              with girl's red jacket would create a powerful visual impact. I
              have worked closely with the rest of the team, and created
              lighting prototypes in-engine to ensure that the lighting, dynamic
              fog and ambient audio will immerse the player in that atmosphere.
            </li>
          </ul>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Resonance;
