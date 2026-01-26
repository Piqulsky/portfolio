import { useEffect, useState } from "react";
import "../PerProject.css";
import "./CoalInMyHeart.css";
import Navbar from "../../../Modules/Navbar/Navbar";
import Footer from "../../../Modules/Footer/Footer";
import Tag from "../../../Modules/Tag/Tag";

function CoalInMyHeart() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const coalInMyHeartProject = projects.find(
    (project) => project.title === "Coal in my Heart",
  );

  return (
    <div
      className="CoalInMyHeart"
      style={{ backgroundColor: coalInMyHeartProject?.bgColor }}
    >
      <Navbar />
      <div className="ProjectPageBanner">BANNER</div>
      <div className="ProjectPageTitle">{coalInMyHeartProject?.title}</div>
      <div className="ProjectPageTags">
        {coalInMyHeartProject?.tags.map((tag, index) => (
          <Tag name={tag} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CoalInMyHeart;
