import { useEffect, useState } from "react";
import "./Navbar.css";
import NavElement from "./NavElement/NavElement";
import NavbarElementExpandable from "./NavElementExpandable/NavElementExpandable";

function Navbar() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) =>
        setProjects(
          data.filter((project) => project.pageLink !== "/other/gamejams"),
        ),
      )
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="Navbar">
      <div className="LeftBox">
        Michał Pikulski | <span>&nbsp;</span>
        <a className="accent"> Level Designer</a>
      </div>
      <div className="RightBox">
        <NavElement name="Main Projects" link="/portfolio" />
        <NavElement name="Project Archive" link="/projects" />
        {/* <NavbarElementExpandable
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
        /> */}
        <NavElement name="About Me" link="/aboutme" />
        <a href={process.env.PUBLIC_URL + "/CV.pdf"}>
          <div className="NavElement">{"CV / Resume"}</div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
