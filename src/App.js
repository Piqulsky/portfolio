import React, { useEffect, useState } from "react";
import "./App.css";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "./reusable/NavBar";
import Footer from "./reusable/Footer";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="App">
      <NavBar />

      {/* Homepage Content */}
      <div className="homepage">
        <div className="profile">
          {/* <img
            src={`${process.env.PUBLIC_URL}/avatar.jpg`}
            alt="Michał Pikulski"
            className="profile-photo"
          /> */}
          <img
            src={`${process.env.PUBLIC_URL}/homepage-back.png`}
            alt="Background collage"
            className="back-photo"
          />
          <div className="profile-text">
            <h1>Michał Pikulski</h1>
            <p className="subtitle">
              Game Designer | Creating games that tell a story
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={project.link}
            >
              <div
                key={index}
                className="project-box"
                style={{
                  backgroundColor: project.backgroundColor,
                  fontFamily: project.fontFamily,
                  fontSize: project.fontSize,
                }}
              >
                <h3>{project.name}</h3>
                <img
                  src={`${process.env.PUBLIC_URL}/projects/${project.image}.jpg`}
                  alt={project.name}
                  className="project-image"
                />
                <p>{project.description}</p>
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
                <p></p>
                <p className="responsibilities">
                  <strong>Responsible for:</strong>{" "}
                  <ul>
                    {project.responsibleFor?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
