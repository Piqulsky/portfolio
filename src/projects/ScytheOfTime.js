import React from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";
import NavBar from "../reusable/NavBar";
import Footer from "../reusable/Footer";

function ScytheOfTime() {
  return (
    <div className="ScytheOfTime">
      <NavBar />

      {/* Wide Photo */}
      <div className="project-photo">
        <img
          src={`${process.env.PUBLIC_URL}/projects/scythe_of_time.jpg`}
          alt="Scythe of Time"
          className="wide-photo"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h1>SCYTHE OF TIME©</h1>
        <p>
          <strong>Description:</strong> “Scythe of Time” is a 2D tactical game
          concept that explores planning mechanics. Each level requires players
          to complete objectives by planning movements in advance while
          everything is frozen in time.
        </p>
        <p>
          <strong>Role:</strong> Sole creator
        </p>
        <p>
          <strong>Time:</strong> Feb 2024
        </p>
        <p>
          <strong>Stage:</strong> Completed concept
        </p>

        <h2>About the Game</h2>
        <p>
          "Scythe of Time" is a game concept that emphasizes strategic planning
          and foresight. Players are tasked with navigating challenging levels
          by pre-planning their actions, as time only advances when the player
          moves. This mechanic creates a unique puzzle-solving experience where
          players must anticipate obstacles and devise an optimal sequence of
          actions to achieve success.
        </p>

        <h2>Gameplay Mechanics</h2>
        <p>
          The game’s core mechanic is turn-based, where each action the player
          takes will unfreeze time, allowing the world to respond to their
          moves. The goal is to navigate through each level, avoiding hazards
          and completing objectives with as few actions as possible. Key
          gameplay elements include:
        </p>
        <ul>
          <li>
            <strong>Time Manipulation:</strong> Time only advances when the
            player moves, allowing for tactical planning and adjustments.
          </li>
          <li>
            <strong>Path Optimization:</strong> Players are encouraged to find
            the shortest and most efficient path to complete each level.
          </li>
          <li>
            <strong>Interactive Obstacles:</strong> Levels contain traps and
            enemies that activate only when time advances, adding a layer of
            complexity.
          </li>
        </ul>

        <h2>Level Design</h2>
        <p>
          Each level in "Scythe of Time" is crafted to challenge players’
          problem-solving skills. Players must think several steps ahead,
          carefully considering each move's consequences. Levels are filled with
          interactive elements that require precise timing and strategy to
          navigate effectively.
        </p>

        <h2>Challenges and Rewards</h2>
        <p>
          The game rewards players for completing levels efficiently. Players
          who complete levels with minimal moves earn higher scores and unlock
          additional challenges. This scoring system adds replayability and
          encourages players to improve their strategies.
        </p>

        <h2>Future Development Plans</h2>
        <p>
          "Scythe of Time" is currently a concept, but future plans include
          expanding it into a full game with additional levels, enhanced
          mechanics, and more complex puzzles. Potential expansions include new
          types of interactive obstacles, diverse environments, and character
          abilities that further enhance the strategic gameplay.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default ScytheOfTime;
