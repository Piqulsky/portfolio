import { useEffect, useState } from "react";
import "../PerProject.css";
import "./WhenTheDuskComes.css";
import Navbar from "../../../Modules/Navbar/Navbar";
import Footer from "../../../Modules/Footer/Footer";
import Tag from "../../../Modules/Tag/Tag";

function WhenTheDuskComes() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const whenTheDuskComesProject = projects.find(
    (project) => project.title === "When the Dusk Comes",
  );

  return (
    <div
      className="WhenTheDuskComes"
      style={{ backgroundColor: whenTheDuskComesProject?.bgColor }}
    >
      <Navbar />
      <div className="ProjectPageBanner">BANNER</div>
      <div className="ProjectPageTitle">{whenTheDuskComesProject?.title}</div>
      <div className="ProjectPageTags">
        {whenTheDuskComesProject?.tags.map((tag, index) => (
          <Tag name={tag} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default WhenTheDuskComes;
