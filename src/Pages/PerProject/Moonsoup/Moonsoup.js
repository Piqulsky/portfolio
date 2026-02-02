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
        <div className="ProjectPageSubtitle">
          "Moonsoup" is a 2D simulator game about running a potion shop set in a
          medieval fantasy setting. The game combines logical puzzles and
          mini-games in a design that focuses on creating a casual and relaxing
          gameplay.
        </div>
        <div className="ProjectPageTags">
          {moonsoupProject?.tags.map((tag, index) => (
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
            <div className="ProjectPageDetailContent">5 months</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">Unity</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">Puzzle</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">Single player</div>
          </div>
          <div className="ProjectPageDetail">
            <div className="ProjectPageDetailImage"></div>
            <div className="ProjectPageDetailContent">Windows</div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Role and tasks</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              As a system designer, I was responsible for creating systems that
              would react to player behavior, provide results and create context
              for player actions, to create an interactive experience of
              potionmaking.
            </div>
            <ul>
              <li>
                Designed and created gardening system, a variety of minigames,
                dialogue system and quest system
              </li>
              <li>
                Integrated the systems of the game to create a cohesive gameplay
                experience
              </li>
              <li>
                Collaborated with other developers on creating the key system of
                the game - potionmaking
              </li>
              <li>
                Brainstormed, graphed out and implemented new potions to
                integrate into gameplay
              </li>
              <li>
                Playtested and iterated on feedback systems to player actions
              </li>
            </ul>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Project Timeline</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageTimeline">
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Concepting</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>Brainstormed and prototyped the potionmaking system</div>
                  <div>Proposed and experimented on a variety of minigames</div>
                  <div>Designed gardening functionality</div>
                </div>
              </div>

              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">
                  Pre-production
                </div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>Designed recipes for potions and created a notebook</div>
                  <div>Prototyped different minigames</div>
                  <div>Collaborated on prototyping the potionmaking system</div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Production</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>QA, playtesting and iteration</div>
                  <div>Implementation of narrative systemsk</div>
                  <div>Integrating potionmaking into progression system</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Pillars</div>
          <div className="ProjectPageSectionMultiContent">
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Wonder of alchemy
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                The game is encouraging experimenting with an huge variety of
                possible combinations of ingredients to discover how to make
                certain potions through trial and error. The heavy focus on
                logic in potionmaking requires the player to understand how
                different puzzle react to each other.
              </div>
            </div>
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Growing a shop
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                The game offers player freedom to design their garden in any way
                they wish and offers room for growth in potionmaking skills.
                Progression in game unlocks possibility to create more and more
                sophisticated potions, offering an experience of growth and
                improvement.
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Slow gameplay design</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Discovery-based learning
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  One of the key decisions in designing the potionmaking system
                  was to focus on experimentation, giving the player a lot of
                  freedom in how they can combine different ingredients into
                  potion perks to later complete potions. Providing the player
                  with automatically updating notebook had encouraged them to
                  peacefully mess around new possibilities and discover what new
                  combinations have been hidden away from them until now.
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Growing a garden
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContent">
                  Curating to a garden is one of the main activities that the
                  player needs to do in order to brew potions. As time flows
                  plants grow and once they reach maturity they give ingredients
                  to the player that can be immediately put in a cauldron.
                  Putting a time constraint on plant growing allowed to create a
                  slow gameplay loop where player goes to plant the plants, then
                  goes to experiment with potions, and when they come back they
                  can replenish ingredients and plant new ones.
                </div>
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Potionmaking dynamic
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  Brewing potions requires concentration from the player, but
                  not in a constant manner. Instead it requires careful thinking
                  about next steps in order to create a finished potion. The
                  more sophisticated potion, the slower will be the process, but
                  harder will be the logical challenge. The system encourages
                  the player to take a moment, look through the notebook and
                  think about their plan for the potion.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Layered system design</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Coziness of plants
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  The first layer of potionmaking is gardening and it is the
                  most straightforward step towards brewing a potion. However,
                  it requires planning when it comes to selection of the type of
                  plant that the player wants to plant. The system motivates the
                  player to plant the ingredient and then go off to interact
                  with other gameplay features.
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Dexterity in minigames
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContent">
                  The optional step, that becomes relevant as player improves in
                  their potionmaking, is ingredient preparation, which uses
                  dexterity-based minigames that are intentionally using
                  different skills of the player than needed for brewing
                  potions. Each of them is a different system requiring player
                  to use a single input in specific patterns to succeed.
                </div>
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Logic network of potions
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  The main and final part of potionmaking relies heavily on
                  player's capability of making logical connections and planning
                  next steps. First the player connects ingredients to create
                  perks and combining perks can generate potion effects that
                  allow to brew a potion. Designing the system in this way
                  allowed to challenge the player by providing a variety of
                  solutions and approaches that need to be roughly planned out
                  in their mind.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Progression</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Levels of potionmaking
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  To introduce a certain goal to the player it was necessary to
                  give them a set of tasks, some challenges of sorts, that they
                  would strive towards. To progress, they need to brew certain
                  potions that are currently available to make for them. This
                  helped to teach the players new possibilities and mechanics
                  that are introduced per level.
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Thresholds in variety
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContent">
                  To scale the challenge and complexity of potionmaking it was
                  necessary to introduce some sort of gated progression that
                  would limit the variety of available potions to make at that
                  level of potionmaking. Making this work helped to handle
                  onboarding and introducing new minigames one by one, so that
                  player is not immediately overwhelmed by all of the available
                  system.
                </div>
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
              </div>
            </div>
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceHeader">
                Quest system
              </div>
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ProjectPageSectionContentPieceContentImage">
                  IMAGE
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  Creating quests and rewards helped to give purpose to making
                  all kinds of potions and to create a indirect rating system of
                  the quality of the potions that the player makes. Introducing
                  small stories alongside the orders provided some narrative
                  motivation to making the potions alongside monetary reward.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Closing thoughts</div>
          <div className="ProjectPageSectionContent">
            <p>
              Designing a game with a strong feel of experimentation and wonder
              required us to design systems that would feel very reactive and
              playful, offering a lot of possibilities and would not feel like
              the player is being directed into specific behaviors. Otherwise,
              the player would quickly feel constrained and forced into a linear
              progression. Instead, creating progression that is focused on
              experiencing the breadth of the system helps to introduce every
              possibility to the player.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Moonsoup;
