import { useEffect, useState } from "react";
import "../PerProject.css";
import "./ProhibitionTime.css";
import Navbar from "../../../Modules/Navbar/Navbar";
import Footer from "../../../Modules/Footer/Footer";
import Tag from "../../../Modules/Tag/Tag";

function ProhibitionTime() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const prohibitionTimeProject = projects.find(
    (project) => project.title === "Prohibition Time",
  );

  return (
    <div
      className="ProhibitionTime"
      style={{ backgroundColor: prohibitionTimeProject?.bgColor }}
    >
      <Navbar />
      <div className="ProjectPageBanner">BANNER</div>
      <div className="ProjectPageTitle">{prohibitionTimeProject?.title}</div>
      <div className="ProjectPageTags">
        {prohibitionTimeProject?.tags.map((tag, index) => (
          <Tag name={tag} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProhibitionTime;
