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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            risus felis. Proin fermentum, ipsum in cursus cursus, dolor ligula
            tempus justo, a hendrerit justo mauris non urna. In eget turpis
            vestibulum, accumsan odio ut, convallis nunc. Integer mollis elit a
            sapien facilisis, eget facilisis est ultricies. Pellentesque ut
            sagittis erat, vitae consequat odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            risus felis. Proin fermentum, ipsum in cursus cursus, dolor ligula
            tempus justo, a hendrerit justo mauris non urna. In eget turpis
            vestibulum, accumsan odio ut, convallis nunc. Integer mollis elit a
            sapien facilisis, eget facilisis est ultricies. Pellentesque ut
            sagittis erat, vitae consequat odio.
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
