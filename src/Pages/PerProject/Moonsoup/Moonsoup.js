import { useEffect, useState } from "react";
import "../PerProject.css";
import "./Moonsoup.css";
import Navbar from "../../../Modules/Navbar/Navbar";
import Footer from "../../../Modules/Footer/Footer";
import Tag from "../../../Modules/Tag/Tag";

function Moonsoup() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const moonsoupProject = projects.find(
    (project) => project.title === "Moonsoup",
  );

  return (
    <div
      className="Moonsoup"
      style={{ backgroundColor: moonsoupProject?.bgColor }}
    >
      <Navbar />
      <div className="ProjectPageBanner">BANNER</div>
      <div className="ProjectPageTitle">{moonsoupProject?.title}</div>
      <div className="ProjectPageCenter">
        <div className="ProjectPageTags">
          {moonsoupProject?.tags.map((tag, index) => (
            <Tag name={tag} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Moonsoup;
