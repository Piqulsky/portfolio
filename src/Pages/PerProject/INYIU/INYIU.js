import { useEffect, useState } from "react";
import "../PerProject.css";
import "./INYIU.css";
import Navbar from "../../../Modules/Navbar/Navbar";
import Footer from "../../../Modules/Footer/Footer";
import Tag from "../../../Modules/Tag/Tag";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function INYIU() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const inyiuProject = projects.find(
    (project) => project.title === "It's Not You It's Us",
  );

  return (
    <div className="INYIU" style={{ backgroundColor: inyiuProject?.bgColor }}>
      <Navbar />
      <div className="ProjectPageBanner">
        <video autoPlay loop muted>
          <source
            src={process.env.PUBLIC_URL + "/Resonance/ResonanceShowreel.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="ProjectPageTitle">{inyiuProject?.title}</div>
      <div className="ProjectPageCenter">
        <div className="ProjectPageSubtitle">
          “It’s Not You It’s Us” is a 3D point-and-click adventure about animal
          characters coming together to make their town a better place. Explore
          a cozy town as you meet the Urbanimals, and discover that taking care
          of the environment is something nobody can do on their own.
        </div>
        <div className="ProjectPageTags">
          {inyiuProject?.tags.map((tag, index) => (
            <Tag name={tag} />
          ))}
        </div>
        <div className="ProjectPageDetails">
          <div className="ProjectPageDetail">
            <img
              className="ProjectPageDetailImage"
              src={process.env.PUBLIC_URL + "/Details/developers.png"}
            />
            <div className="ProjectPageDetailContent">13 developers</div>
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
            <div className="ProjectPageDetailContent">Point-and-click</div>
          </div>
          <div className="ProjectPageDetail">
            <img
              className="ProjectPageDetailImage"
              src={process.env.PUBLIC_URL + "/Details/singleplayer.png"}
            />
            <div className="ProjectPageDetailContent">Singleplayer</div>
          </div>
          <div className="ProjectPageDetail">
            <img
              className="ProjectPageDetailImage"
              src={process.env.PUBLIC_URL + "/Details/windows.png"}
            />
            <div className="ProjectPageDetailContent">Windows</div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Role and tasks</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              As a level designer, I was responsible for creating game spaces,
              where player could experience the cozy town that is free to
              explore and full of small quests.
            </div>
            <ul>
              <li>
                I developed a polished level design for 80% of the game’s only
                level using Unreal Engine 5.
              </li>
              <li>
                I developed the starting onboarding section that would introduce
                a non-gamer to basic game mechanics, and also diegetic
                onboarding for the abilities of all 5 characters in the game.
              </li>
              <li>
                I have setup the level to use the Houdini procedural tooling
                created by the tech artist, to enable quick iteration, through
                non-destructive modifications.
              </li>
              <li>
                I have iterated on my level design based on numerous playtests
                with the target audience during various sessions, including
                teenagers during the Night of the Nerds event.
              </li>
              <li>
                I brainstormed and concepted multiple possible level designs in
                collaboration with the other level designer and presented to the
                rest of the team.
              </li>
              <li>
                I collaborated closely with environment artists and tech artists
                to ensure cohesive level aesthetics
              </li>
            </ul>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Overview</div>
          <div className="ProjectPageFullImage">
            <Zoom>
              <img src={process.env.PUBLIC_URL + "/INYIU/INYIULayout.png"} />
            </Zoom>
            <div className="ProjectPageSectionContentPieceHeader">
              Design Intent
            </div>
            <p>
              The level was focused on providing two types of experience to the
              player:
            </p>
            <ul>
              <li>
                Power of collaboration - the level design utilizes the different
                character abilities in a way that requires the player to use
                them together.
              </li>
              <li>
                Playable by all - the level is very easy to play for people who
                haven’t had much experience with gaming before and intuitive to
                navigate for those unfamiliar with level design conventions.
              </li>
            </ul>
            <p>
              I wanted to reinforce the game’s message of collaboration by
              integrating it heavily into my level design. Having 5 different
              characters offered a possibility to explore gating the player
              progression until they have completed the required character
              quests. Because the game is intended to be played during a
              workshop for students, I had to make sure the level is very
              accessible to as many people as possible.
            </p>
          </div>
          <div className="ProjectPageBigImage">
            <div className="">
              <div className="ProjectPageSectionContentPieceHeader">Flow</div>
              <p>
                The game has a very cozy vibe that comes from the artstyle and
                narrative, but also the low intensity of the game and slow
                pacing. I have kept it like this to allow the players to explore
                the game at their own pace.
              </p>
              <p>
                The flow of the game follows a very defined loop of onboarding
                the character, then providing a quest for fitting their
                abilities, and finally overcoming the challenges.
              </p>
            </div>
            <Zoom>
              <img src={process.env.PUBLIC_URL + "/INYIU/INYIUFlow.png"} />
            </Zoom>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Techniques</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              In the level design process I have relied on multiple techniques
              to help creating an accessible experience that would encourage
              exploration and let the player to use a variety of character
              abilities required to progress in the game. Through playtesting an
              iteration I have been able to polish the level design to achieve
              the expected results when it comes to player guidance and
              interaction.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Foreshadowing
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To enable the player to have a peek into what they should look
                for later, I decided to use elevation and gaps between houses to
                show pieces of the town that are not accessible to the player
                yet.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Foreshadowing1.png"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Foreshadowing2.png"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">Guidance</div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To ensure that the player won’t get lost in the town at any
                point, I have relied on signage and a representation of the
                golden path. The yellow brick road and road signs are results of
                making the guidance understandable for non-gamers
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/PrevGuidance.png"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Guidance.png"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Locks & Keys
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To make the player use the characters that they have available
                and to create a sense of progression, I have locked the player’s
                paths with level ingredients that require specific characters
                abilities to be used together.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/Lock3.mp4"}
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/Lock4.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Point-and-click Layout</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              The specifics of the point-and-click genre impose a variety of
              restrictions on the level design. It took a lot of research and
              iteration to figure out the principles that each of the levels in
              the game is supposed to follow. Using the intentional level
              geometry and elevation I have been able to overcome the
              restrictions of the fixed-camera perspective, waypoint-based
              movement, and navigation.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Exploration-first
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To keep the player moving around the level and find the quest
                characters, I have created a non-linear layout based around a
                central hub that splits into multiple pathways that player can
                explore.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Landmark5.png"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Landmark2.png"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Landmarks
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To ensure that the player has an easy time navigating and to
                lead their eyesight, I have implemented landmarks, which are the
                characters, and also the central tree, to guide the player to
                their objectives.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Landmark1.png"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Landmark4.png"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">Camera</div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To ensure smooth gameplay for the player in all of the available
                spaces, I have adjusted the architecture to remove any clipping
                issues and limit obscuring the player to absolute minimum.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Camera1.png"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Camera2.png"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Connectivity
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To ensure that the player isn’t forced into backtracking, I have
                created interconnectivity between areas that allows to move
                between them without needing to always go back to the town
                square.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Connectivity.png"}
                />
              </Zoom>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/Connectivity.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">Movement</div>
            <div className="ProjectPageDoubleMedia">
              <p>
                One of the challenges was making sure that the player character
                will always move where the player intends them to, and bridges
                were iterated the most often to reach a size that would mitigate
                most of the issues.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/Bridge1.mp4"}
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/Bridge2.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Unlocking Characters</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              The specifics of the point-and-click genre impose a variety of
              restrictions on the level design. It took a lot of research and
              iteration to figure out the principles that each of the levels in
              the game is supposed to follow. Using the intentional level
              geometry and elevation I have been able to overcome the
              restrictions of the fixed-camera perspective, waypoint-based
              movement, and navigation.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Simple Puzzles
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To ensure lack of frustration with quests, I had decided to keep
                the solutions very simple. This way, instead of focusing on
                solving a puzzle, player is exposed to the experience of
                collaboration more.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/SimplePuzzle1.mp4"}
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/SimplePuzzles3.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Teaching New Ingredients
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To help the player understand what the characters do, I had
                relied on affordance to convey the intention. By placing objects
                in the way, or obviously in the wrong spot, I am motivating the
                player to interact with them.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/Obstacle1.mp4"}
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/INYIU/Obstacle2.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Level Design process</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              Throughout the development process I had to constantly communicate
              my intentions with the rest of my team, so that we would all be on
              board with the vision. For this exact purpose, I have consistently
              delivered a lot of paper documentation that I updated throughout
              the iteration process. Following a consistent level design process
              helped me to ensure that the game design principles were strictly
              followed in each iteration.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">Layouts</div>
            <div className="ProjectPageDoubleMedia">
              <p>
                Creating top-down layouts on paper helped to plan out different
                pathways that the player can enter the area from and adjust the
                spaces to accommodate various approaches to exploration.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/OnboardingLayout.jpeg"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Puzzle1Layout.jpeg"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                Creating top-down layouts on paper helped to plan out different
                pathways that the player can enter the area from and adjust the
                spaces to accommodate various approaches to exploration.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Layout1.gif"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Layout2.gif"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">Puzzles</div>
            <div className="ProjectPageDoubleMedia">
              <p>
                Creating storyboards for the puzzle started out as an
                experiment, but then it became very useful, as it helped to
                convey the intention to the rest of the team in a very
                straightforward manner.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={
                    process.env.PUBLIC_URL + "/INYIU/OnboardingStoryboard.jpeg"
                  }
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/Puzzle1Storyboard.jpeg"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                Creating storyboards for the puzzle started out as an
                experiment, but then it became very useful, as it helped to
                convey the intention to the rest of the team in a very
                straightforward manner.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/PrevPuzzle1.png"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/INYIU/PrevPuzzle2.png"}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default INYIU;
