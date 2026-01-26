import { useEffect, useState } from "react";
import "./Navbar.css";
import NavElement from "./NavElement/NavElement";
import NavbarElementExpandable from "./NavElementExpandable/NavElementExpandable";

function Navbar() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="Navbar">
      <div className="LeftBox">Michał Pikulski</div>
      <div className="RightBox">
        <NavElement name="Home" link="/" />
        <NavbarElementExpandable
          name="My Projects"
          link="/projects"
          subElements={projects.map((project) => ({
            name: project.title,
            link: project.pageLink,
          }))}
        />
        <NavbarElementExpandable
          name="Other Endeavors"
          link="/"
          subElements={[
            { name: "Game Jams", link: "/other/gamejams" },
            { name: "Game Mastering", link: "/other/gamemastering" },
            { name: "Adventurers' League", link: "/other/adventurersleague" },
            { name: "Miro Templates", link: "/other/mirotemplates" },
            { name: "Design Bible", link: "/other/designbible" },
          ]}
        />
        <NavElement name="About & Resume" link="/aboutme" />
        <NavElement name="Contact Me" link="/contact" />
      </div>
    </div>
  );
}

export default Navbar;
