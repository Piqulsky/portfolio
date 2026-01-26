import { useEffect, useState } from "react";
import Footer from "../../Modules/Footer/Footer";
import Navbar from "../../Modules/Navbar/Navbar";
import Project from "../../Modules/Project/Project";
import "./ProjectsPage.css";
import { useParams } from "react-router";

function ProjectsPage() {
  let { skillFilter } = useParams();

  function camelCaseToTitle(s) {
    if (s == null) return "";
    if (s == "c") return "C#";
    let result = s.replace(/([A-Z])/u, " $1");
    result = result.replace(/([0-9])/u, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="ProjectsPage">
      <Navbar />
      <div className="ProjectsPageTitle">
        {camelCaseToTitle(skillFilter)} Projects
      </div>
      <div className="ProjectsPageContent">
        {projects
          .filter((project) =>
            skillFilter
              ? project.tags.includes(camelCaseToTitle(skillFilter))
              : true,
          )
          .map((project, index) => (
            <Project {...project} />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
