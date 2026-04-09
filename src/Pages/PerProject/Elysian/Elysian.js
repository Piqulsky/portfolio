import { useEffect, useState } from "react";
import "../PerProject.css";
import "./Elysian.css";
import Navbar from "../../../Modules/Navbar/Navbar";
import Footer from "../../../Modules/Footer/Footer";
import Tag from "../../../Modules/Tag/Tag";

function Elysian() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const elysianProject = projects.find(
    (project) => project.title === "Elysian",
  );

  return (
    <div
      className="Elysian"
      style={{ backgroundColor: elysianProject?.bgColor }}
    >
      <Navbar />
      <div className="ProjectPageBanner">
        <video autoPlay loop muted>
          <source
            src={process.env.PUBLIC_URL + "/Elysian/ElysianShowreel.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="ProjectPageTitle">{elysianProject?.title}</div>
      <div className="ProjectPageCenter">
        <div className="ProjectPageSubtitle">
          "Elysian" is a short dystopian psychological thriller about addiction
          and escapism. Two friends clash when their views on the euphoric drug
          create a rift between themselves.
        </div>
        <div className="ProjectPageTags">
          {elysianProject?.tags.map((tag, index) => (
            <Tag name={tag} />
          ))}
        </div>
        <div className="ProjectPageDetails">
          <div className="ProjectPageDetail">
            <img
              className="ProjectPageDetailImage"
              src={process.env.PUBLIC_URL + "/Details/developers.png"}
            />
            <div className="ProjectPageDetailContent">9 filmmakers</div>
          </div>
          <div className="ProjectPageDetail">
            <img
              className="ProjectPageDetailImage"
              src={process.env.PUBLIC_URL + "/Details/time.png"}
            />
            <div className="ProjectPageDetailContent">8 weeks</div>
          </div>
          <div className="ProjectPageDetail">
            <img
              className="ProjectPageDetailImage"
              src={process.env.PUBLIC_URL + "/Icons/unrealEngine5.png"}
            />
            <div className="ProjectPageDetailContent">Unreal Engine 5</div>
          </div>
          <div className="ProjectPageDetail">
            <img
              className="ProjectPageDetailImage"
              src={process.env.PUBLIC_URL + "/Details/action.png"}
            />
            <div className="ProjectPageDetailContent">Thriller</div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Role and tasks</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              As an environment artist and virtual production supervisor, ...
            </div>
            <ul>
              <li>X</li>
              <li>X</li>
              <li>X</li>
              <li>X</li>
              <li>X</li>
              <li>X</li>
            </ul>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Project Timeline</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageTimeline">
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Research</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>.</div>
                  <div>.</div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">
                  Pre-production
                </div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>.</div>
                  <div>.</div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Test day</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>.</div>
                  <div>.</div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Shooting</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>.</div>
                  <div>.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">
            Working with director's treatment
          </div>
          <div className="ProjectPageSectionMultiContent">
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Translating to virtual
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                .
              </div>
            </div>
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Feasibility of the vision
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                .
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">
            Between reality and drug induced utopia
          </div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Transitions between the two worlds
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ResonanceFourByFour">.</div>
                <div className="ProjectPageSectionContentPieceContent">.</div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Glitches of reality
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContent">.</div>
                <div className="ProjectPageSectionContentPieceContentImage">
                  .
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Atmosphere</div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Sad reality
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContentImage">
                .
              </div>
              <div className="ProjectPageSectionContentPieceContent">.</div>
            </div>
          </div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Impossible utopia
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContent">.</div>
              <div className="ProjectPageSectionContentPieceContentImage">
                .
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Collaboration</div>
          <div className="ProjectPageSectionMultiContent">
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Different industry
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                .
              </div>
            </div>
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Story-centric
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                .
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Closing thoughts</div>
          <div className="ProjectPageSectionContent">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Elysian;
