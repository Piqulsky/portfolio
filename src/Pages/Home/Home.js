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

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  // const handleFilterClick = (filterName) => {
  //   setActiveFilter(filterName);
  // };

  // const clearFilters = () => {
  //   setActiveFilter(null);
  // };

  // const setAllFilters = () => {
  //   setActiveFilter("All");
  // };

  // const setFeaturedFilter = () => {
  //   setActiveFilter("Featured");
  // };

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
      <div className="HomeContent" id="top">
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
            <NavLink to="/aboutme">
              <img
                className="IntroImage"
                src={process.env.PUBLIC_URL + "/profile.jpeg"}
              ></img>
              <div className="IntroTitle">About Me</div>
              <div className="IntroAbout">
                Level Design Professional with a passion for creating advanced
                level designs which encourage player creativity and exploration.
              </div>
            </NavLink>
          </div>
          <div className="ProjectArrow">
            <div className="ProjectArrowText">
              <a href="#projects">Projects</a>
            </div>
            <img
              id="projects"
              className="ProjectArrowImage"
              src={process.env.PUBLIC_URL + "/arrowdown.png"}
            ></img>
          </div>
        </div>
        <div className="FeaturedProjects">
          <div className="FeaturedProjectsBox">
            <div className="FeaturedProjectsList">
              {generateProjectList()}
              {/* <div className="FeaturedProjectMore">
              <NavLink to="/projects">See more projects...</NavLink>
            </div> */}
            </div>
            <div className="MoreProjectsButtonBox">
              <NavLink to="/projects">
                <div className="MoreProjectsButton">More Projects...</div>
              </NavLink>
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
