import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaLink } from "react-icons/fa";
import NavBar from "../reusable/NavBar";
import Footer from "../reusable/Footer";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="projects">
      <NavBar />

      <div className="projects-grid">
        {projects.map((project, index) => (
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
      <Footer />
    </div>
  );
}

export default Projects;
