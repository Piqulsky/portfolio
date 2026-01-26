import { useEffect, useState } from "react";
import "../PerProject.css";
import "./Resonance.css";
import Navbar from "../../../Modules/Navbar/Navbar";
import Footer from "../../../Modules/Footer/Footer";
import Tag from "../../../Modules/Tag/Tag";

function Resonance() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const resonanceProject = projects.find(
    (project) => project.title === "Resonance",
  );

  return (
    <div
      className="Resonance"
      style={{ backgroundColor: resonanceProject?.bgColor }}
    >
      <Navbar />
      <div className="ProjectPageBanner">BANNER</div>
      <div className="ProjectPageTitle">{resonanceProject?.title}</div>
      <div className="ProjectPageTags">
        {resonanceProject?.tags.map((tag, index) => (
          <Tag name={tag} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Resonance;
