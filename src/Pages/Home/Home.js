import "./Home.css";
import Navbar from "../../Modules/Navbar/Navbar";
import Footer from "../../Modules/Footer/Footer";
import Project from "../../Modules/Project/Project";
import Tag from "../../Modules/Tag/Tag";
import ContactMe from "../../Modules/ContactMe/ContactMe";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import Filter from "../../Modules/Filter/Filter";

function Home() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Featured");

  const filters = [
    "Unreal Engine 5",
    "Unity",
    "Godot Engine",
    "Game Design",
    "Level Design",
    "System Design",
    "Technical Design",
    "Combat Design",
    "Puzzle Design",
    "Tabletop Design",
    "Multiplayer",
    "Virtual Reality",
    "Visual Scripting",
    "Lighting",
    "Environment Art",
    "Virtual Production",
    "Filmmaking",
    "C#",
    "ReactJs",
    "Git",
    "Perforce",
    "Miro",
    "Scrum",
    "Taiga",
    "Trello",
    "Confluence",
  ];

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  const clearFilters = () => {
    setActiveFilter(null);
  };

  const setAllFilters = () => {
    setActiveFilter("All");
  };

  const setFeaturedFilter = () => {
    setActiveFilter("Featured");
  };

  const generateProjectList = () => {
    console.log(activeFilter);
    switch (activeFilter) {
      case "All":
        return projects.map((project, index) => (
          <Project key={index} {...project} />
        ));
      case "Featured":
        return projects
          .filter((project) => project.featured)
          .map((project, index) => <Project key={index} {...project} />);
      case null:
        return projects
          .filter((project) => project.featured)
          .map((project, index) => <Project key={index} {...project} />);
      default:
        return projects
          .filter((project) => project.tags.includes(activeFilter))
          .map((project, index) => <Project key={index} {...project} />);
    }
  };

  return (
    <div className="Home">
      <Navbar />
      <div className="HomeContent">
        <div className="Intro">
          <div className="IntroVideo">
            <video autoPlay loop muted>
              <source
                src={process.env.PUBLIC_URL + "/showreel.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="IntroName">
            Michał Pikulski
            <div className="IntroJobTitle">Level Designer</div>
          </div>
        </div>
        <div className="FeaturedProjects">
          <div className="FeaturedProjectsTitle">Projects:</div>
          <div className="FeaturedProjectsBox">
            <div className="Skills">
              <div className="SkillsTitle">Filters:</div>
              <div className="SkillsList">
                <div className="Tag" onClick={clearFilters}>
                  Clear
                  <div>
                    <img
                      className="TagIcon"
                      src={process.env.PUBLIC_URL + "/Icons/" + "x.png"}
                    />
                  </div>
                </div>
                <div className="Tag" onClick={setAllFilters}>
                  All
                  <div>
                    <img
                      className="TagIcon"
                      src={process.env.PUBLIC_URL + "/Icons/" + "list.png"}
                    />
                  </div>
                </div>
                <div className="Tag" onClick={setFeaturedFilter}>
                  Featured
                  <div>
                    <img
                      className="TagIcon"
                      src={process.env.PUBLIC_URL + "/Icons/" + "star.png"}
                    />
                  </div>
                </div>
                {filters.map((tag, index) => (
                  <Filter name={tag} callback={handleFilterClick} />
                ))}
              </div>
            </div>
            <div className="FeaturedProjectsList">
              {generateProjectList()}
              {/* <div className="FeaturedProjectMore">
              <NavLink to="/projects">See more projects...</NavLink>
            </div> */}
            </div>
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
