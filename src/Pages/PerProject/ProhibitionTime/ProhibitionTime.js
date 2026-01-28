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
      <div className="ProjectPageCenter">
        <div className="ProjectPageSubtitle">
          “Prohibition Time” is an online multiplayer game for up to 10 players.
          The game combines elements of the social deduction game “Mafia” (also
          known as “Werewolf”) extended by our team with cards and special
          actions.
        </div>
        <div className="ProjectPageTags">
          {prohibitionTimeProject?.tags.map((tag, index) => (
            <Tag name={tag} />
          ))}
        </div>
        <div className="ProjectPageDetails">
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">4 developers</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">2 years</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">NodeJS</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">Social</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">5-10 players</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">Web</div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Role and tasks</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              As a technical designer, I was responsible for creating a backend
              for the game functionalities and handling multiplayer features, so
              that player could experience a smooth social deduction experience.
            </div>
            <ul>
              <li>
                Designed and created the backend architecture of the game taking
                into account multiple game states, player actions and
                multiplayer communication.
              </li>
              <li>
                Designed and created from the ground up a state machine
                responsible for handling numerous game states.
              </li>
              <li>
                Interpreted tabletop game rules into player actions that are
                adapted to video game format.
              </li>
              <li>
                Ensured a bug-free gameplay that smoothly runs across up to 10
                devices.
              </li>
              <li>Setup a server and a host for a multiplayer web game.</li>
            </ul>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Project Timeline</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageTimeline">
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">
                  Remake Planning
                </div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>
                    After joining the project, the previous design and code had
                    to be rebuilt
                  </div>
                  <div>
                    Interpreting social card game actions into a design for
                    digital game
                  </div>
                </div>
              </div>

              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">
                  Pre-production
                </div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>
                    Creating in-depth documentation for game states and player
                    actions
                  </div>
                  <div>
                    Laying out groundworks for multiplayer communication
                  </div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Production</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>QA, playtesting and iteration</div>
                  <div>
                    Integrating state machine into communication network
                  </div>
                  <div>Adding account system</div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Release</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>Polish and bug fixing</div>
                  <div>Setting up the server host</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Pillars</div>
          <div className="ProjectPageSectionMultiContent">
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">-</div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                -
              </div>
            </div>
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">-</div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                -
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Designing against isolation</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                From high school halls to web
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  The game started out as a card game that was often played in
                  my high school. The pandemic provoked the initial redesign of
                  the game into its digital version. The player verbs had to be
                  reinterpreted based on everything that can happen in a
                  tabletop game and translated into a variety of actions player
                  can perform digitally.
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Connecting during pandemic
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContent">
                  The key element of the game was its ability to reconnect high
                  schoolers that were put into isolation after the pandemic
                  struck. The social connection had to be maintained at all
                  times and the redesign of player actions should evoke the same
                  emotions they did at a regular table.
                </div>
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">
            From a card game to a web game
          </div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Documenting the design
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContent">
                  The first step in the development was to analyze the ruleset
                  of the initial game and create a comprehensive design of the
                  game as a social experience. Investigating the gameplay
                  dynamics, evoked emotions and player strategies helped to
                  distinguish the aspects of the game that are most important to
                  the players. Documenting the tabletop game helped to properly
                  list out a variety of actions that player take and reasons
                  laying behind them.
                </div>
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Interpreting to video game
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  To properly enter digital environment it was necessary to
                  analyze all of the possible player actions that can be
                  performed in a tabletop game, even elements that are not
                  accounted for in the original rules and were rooted in the
                  dynamics created by very flexible social gameplay. That
                  analysis helped to map the actions into those can be easily
                  translated into a video game, those that can be improved and
                  those that need reworking. The list became a groundwork for
                  the layout of the game's backend.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Fighting the framework</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                State Machine
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  The game, just like any other classic social deduction game,
                  relies heavily on numerous states and events it can find
                  itself in. Creating a system for handling those states that
                  can handle any enter actions, exit events and transitions was
                  necessary to be coded from the very beginning, because ReactJS
                  is not equipped in game development tools. This allowed for a
                  complete control over the behavior of the "mind" of the game
                  that helped in creating intended gameplay dynamics, yet was
                  exhausting to initially develop.
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Multiplayer communication
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContent">
                  NodeJS backends need to rely on websockets to handle
                  communication between users connected to the same server. They
                  send messages from one user to another. Because of this
                  technology it was necessary to create a decentralized network
                  that would not have a singular instance of the game that could
                  be accessed by the players. Instead, our backend ensured that
                  each of the players had access only to the information they
                  are supposed to and when new information needs to be
                  introduced, it is sent by players that already have the
                  access. This ensured that players will feel identical
                  experience of limited knowledge that was always present at a
                  game table.
                </div>
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Closing thoughts</div>
          <div className="ProjectPageSectionContent">
            <p>
              Working on Prohibition Time was a significant challenge especially
              due to technological difficulties that came with it. A
              non-game-engine framework to work with, across-the-web multiplayer
              communication and custom state machine made it a significant
              endeavor but also a great learning experience in adapting to
              workflows and tools.
            </p>
            <p>
              Before going into the digital world, understanding the tabletop
              reference was crucial in further development and helped to
              understand the intended player experience in detail. Analyzing how
              player actions can or cannot translate into digital game was one
              of the most significant parts of the design process, since social
              games have numerous gameplay dynamics that are not a result of
              game rules, but instead are a result of people sitting in front of
              each other. Replicating the similar feel of a game table in a
              virtual environment was the main focus of the project.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProhibitionTime;
