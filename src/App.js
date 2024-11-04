import React, { useEffect, useState } from "react";
import "./App.css";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="App">
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

      {/* Homepage Content */}
      <div className="homepage">
        <div className="profile">
          <img
            src={`${process.env.PUBLIC_URL}/avatar.jpg`}
            alt="Michał Pikulski"
            className="profile-photo"
          />
          <div className="profile-text">
            <h1>Michał Pikulski</h1>
            <p className="subtitle">
              Game Designer | Creating games for the benefit of others
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Games have long been underappreciated, yet they hold immense
            potential as tools for change. As one of the most immersive media
            available today, video games uniquely blend storytelling, education,
            and entertainment. Well-crafted games can engage players deeply,
            making them both enjoyable and impactful. With applications in
            psychology and neuroscience, games are poised to shape the future of
            therapy, education, and social change, advancing these fields in
            meaningful ways.
          </p>
          <p>
            Hello! My name is Michał Pikulski, and I am a passionate game
            designer and developer. I am dedicated to creating games that are
            beneficial to the players. I'm 19 years old and already I have
            created projects, both solo and in teams, that are advanced and tap
            into what attracts players to games
          </p>
          <p>
            Currently I am studying at Breda University of Applied Sciences in
            the Netherlands. Through the Creative Media and Game Technologies
            course, I am learning how to create games that are not only fun but
            also interact with players on multiple levels - emotionally,
            socially, physically and psychologically.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-box"
              style={{
                backgroundColor: project.backgroundColor,
                fontFamily: project.fontFamily,
                fontSize: project.fontSize,
              }}
            >
              <h3>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={project.link}
                >
                  {project.name}
                </Link>
              </h3>
              <img
                src={`${process.env.PUBLIC_URL}/projects/${project.image}.jpg`}
                alt={project.name}
                className="project-image"
              />
              <p>{project.description}</p>
              <p>
                <strong>Role:</strong> {project.role}
              </p>
              <p>
                <strong>Time:</strong> {project.time}
              </p>
              <p>
                <strong>Stage:</strong> {project.stage}
              </p>
              {project.seeAt && (
                <a
                  href={project.seeAt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See here
                </a>
              )}
            </div>
          ))}
        </div>
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

export default App;
