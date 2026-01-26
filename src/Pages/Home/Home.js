import "./Home.css";
import Navbar from "../../Modules/Navbar/Navbar";
import Footer from "../../Modules/Footer/Footer";
import Project from "../../Modules/Project/Project";
import Tag from "../../Modules/Tag/Tag";
import ContactMe from "../../Modules/ContactMe/ContactMe";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <div className="HomeContent">
        <div className="Intro">
          {/* Video Background */}
          <div className="IntroName">
            Michał Pikulski
            <div className="IntroJobTitle">Game Designer</div>
          </div>
        </div>
        <div className="FeaturedProjects">
          <div className="FeaturedProjectsTitle">Featured Projects:</div>
          <div className="FeaturedProjectsList">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Project key={index} {...project} />
              ))}
            <div className="FeaturedProjectMore">
              <NavLink to="/">See more projects...</NavLink>
            </div>
          </div>
        </div>
        <div className="Skills">
          <div className="SkillsTitle">Skills:</div>
          <div className="SkillsMore">
            Click each of the skills to discover more:
          </div>
          <div className="SkillsList">
            {[
              "Unreal Engine 5",
              "Unity",
              "Godot Engine",
              "Game Design",
              "Level Design",
              "System Design",
              "Technical Design",
              "Combat Design",
              "Visual Scripting",
              "C#",
              "ReactJs",
              "Git",
              "Perforce",
              "Miro",
              "Scrum",
            ].map((tag, index) => (
              <Tag name={tag} />
            ))}
          </div>
        </div>
        {/* Potentially recommendations */}
        <div className="HomeContactMe">
          <ContactMe />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
