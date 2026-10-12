import { useEffect, useState } from "react";
import "../PerProject.css";
import "./Resonance.css";
import Navbar from "../../../Modules/Navbar/Navbar";
import Footer from "../../../Modules/Footer/Footer";
import Tag from "../../../Modules/Tag/Tag";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
      <div className="ProjectPageBanner">
        <video autoPlay loop muted>
          <source
            src={process.env.PUBLIC_URL + "/Resonance/ResonanceShowreel.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <img
        className="ResonanceDGA"
        src={process.env.PUBLIC_URL + "/Resonance/DGA.png"}
      />
      <div className="ProjectPageTitle">{resonanceProject?.title}</div>
      <div className="ProjectPageCenter">
        <div className="ProjectPageSubtitle">
          "Resonance" is a fast twin-stick action game. Use your telekinetic
          voice to lift and control objects and enemies, allowing you to shield
          yourself and fight! Escape the facility trying to keep you under its
          control.
        </div>
        <div className="ProjectPageTags">
          {resonanceProject?.tags.map((tag, index) => (
            <Tag name={tag} />
          ))}
        </div>
        <div className="ProjectPageDetails">
          <div className="ProjectPageDetail">
            <img
              className="ProjectPageDetailImage"
              src={process.env.PUBLIC_URL + "/Details/developers.png"}
            />
            <div className="ProjectPageDetailContent">11 developers</div>
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
            <div className="ProjectPageDetailContent">Action</div>
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
              where player could experience a prison break full of cathartic
              violence.
            </div>
            <ul>
              <li>
                I developed a complete and polished level design in Unreal
                Engine 5 for the final product
              </li>
              <li>
                I brainstormed and concepted multiple possible level designs and
                presented to the rest of the team
              </li>
              <li>
                I developed several paper prototypes and in-engine prototypes
                using CubeGrid tool to search for gameplay beats fitting the
                player experience
              </li>
              <li>
                I scripted various level ingredients using Blueprints such as
                sequenced doors and spawning systems to create intended gameplay
                situations
              </li>
              <li>
                I designed and coded in Blueprints a system for managing loading
                level parts for optimization purposes
              </li>
              <li>
                I collaborated closely with environment artists to ensure
                cohesive level aesthetics
              </li>
            </ul>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Overview</div>
          <div className="ProjectPageFullImage">
            <Zoom>
              <img
                src={process.env.PUBLIC_URL + "/Resonance/ResonanceLayout.png"}
              />
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
                Feeling of containment - the level design conveys an oppressive
                environment that was meant to imprison the player.
              </li>
              <li>
                Visceral rampage - encounters fuel the player’s rage and first
                of violence again oppressors, who are unmatched against the
                supernatural powers of the player character.
              </li>
            </ul>
            <p>
              I wanted the player to face a variety of self-contained challenges
              which emerge out of different placements of the enemies within the
              geometry of the rooms. I relied heavily on placement of cover and
              the throwable level ingredients to offer the player different
              gameplay scenarios each time they entered a new room.
            </p>
          </div>
          <div className="ProjectPageBigImage">
            <div className="">
              <div className="ProjectPageSectionContentPieceHeader">Flow</div>
              <p>
                As this is the only level in the game, all of the onboarding
                (mechanics, level ingredients, and enemies) had to be developed
                within the first minutes of the gameplay.
              </p>
              <p>
                The difficulty starts rising only after the player is
                sufficiently onboarded and uses enemy placement and quantity to
                increase the challenge.
              </p>
            </div>
            <Zoom>
              <img
                src={process.env.PUBLIC_URL + "/Resonance/ResonanceFlow.png"}
              />
            </Zoom>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Techniques</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              As a level designer, I was responsible for creating game spaces,
              where player could experience a prison break full of cathartic
              violence.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Gates & Valves
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To ensure player stays within the rooms until they complete the
                encounter, I used scripted doors as Gates, which stopped player
                progression, and Valves, which stopped player backtracking.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/DoorsValve.mp4"}
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/DoorsGate.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Direction Reinforcement
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To eliminate confusion and pauses resulting from difficult
                navigation, I streamlined the level layout to always progress
                from left to right and highlighted the room exits with alarm
                signals.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/AlarmLights.mp4"}
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/LeftToRight.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Experience First
            </div>
            <div className="ProjectPageSingleMedia">
              <div>
                <p>
                  During level design process I have constantly prioritized the
                  intended player experience, making sure that they player will
                  get to express their rampage, while the enemies try to contain
                  them.
                </p>
                <p>
                  To achieve that, I have provided the player with a balanced
                  amount of enemies, who fall to the player’s abilities like
                  flies, but placed them far enough that there is always a risk
                  of getting hit.
                </p>
              </div>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/Experience.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Oppressive Architecture</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              The level relies on the architecture and spatial design in a big
              extent. I have intentionally taken a lot of time to refine how the
              space feels even without the enemies present. By using
              architectural tricks of prisons, brutalism, hostile architecture
              practices, and fascist architecture style I have designed spaces
              that use the size contrast and limitations that reinforce
              experience of containment in the player.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">Geometry</div>
            <div className="ProjectPageDoubleMedia">
              <p>
                Geometry offers very limited action spaces to the player, while
                keeping them quite open for the enemies. This imbalance helps to
                create challenging scenarios, where player overcomes the
                disadvantage.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/Resonance/TightSpaces.png"}
                />
              </Zoom>
              <video
                className="ProjectPageDoubleMediaVideo"
                autoPlay
                loop
                muted
                controls
              >
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/Tight.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="ProjectPageSectionContentPieceHeader">Lighting</div>
            <div className="ProjectPageDoubleMedia">
              <p>
                I wanted to reinforce the feeling of being observed and noticed
                using visual cues. Lighting not only guides the players, but
                conveys a lot about how the facility is reacting to the player
                breaking out.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={
                    process.env.PUBLIC_URL + "/Resonance/CinematicLights.mp4"
                  }
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/AlarmLights.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Twin-stick Action Layout</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              The specifics of the twin-stick action genre impose quite a few
              restrictions. Working with a top-down view simplifies drawing the
              level layouts, however it requires careful consideration of what
              is visible on the player’s screen. I have chosen simplicity over
              complexity to curate the player experience and stay very close to
              what makes our game exciting.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Linear Progression
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To keep the player focused on the room they are in, I decided to
                cut them off from backtracking whenever they enter a new room
                and aim them towards the exit door at the opposite end.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={
                    process.env.PUBLIC_URL + "/Resonance/LinearProgression.mp4"
                  }
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={
                    process.env.PUBLIC_URL + "/Resonance/Multi-doorClosing.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Lack of Color
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                One of the challenges of the noir art style was the general lack
                of colour, except for the red. That’s why I decided to have the
                throwable objects in the room highlight themselves when in
                range.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={
                    process.env.PUBLIC_URL +
                    "/Resonance/HighlightingObjects.mp4"
                  }
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={
                    process.env.PUBLIC_URL +
                    "/Resonance/HighlightingEnemies.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Onboarding</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              The level relies on the architecture and spatial design in a big
              extent. I have intentionally taken a lot of time to refine how the
              space feels even without the enemies present. By using
              architectural tricks of prisons, brutalism, hostile architecture
              practices, and fascist architecture style I have designed spaces
              that use the size contrast and limitations that reinforce
              experience of containment in the player.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Mechanic-based Gating
            </div>
            <div className="ProjectPageSingleMedia">
              <div>
                <p>
                  To ensure that the player won’t progress forward before
                  understanding what abilities they have as the player, I have
                  implemented gates in the level design that force the player to
                  use the player abilities before they can progress.
                </p>
                <p>
                  In the example on the right, the player is locked away from
                  the progress until they push and pull the throwable objects in
                  the environment and unlock the route for themselves.
                </p>
              </div>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/SpawnConcrete.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSingleMedia">
              <div>
                <p>
                  I had to follow similar rules when it came to the behaviour of
                  the two different enemy types. The regular enemy type was
                  pretty obvious to all the player, as they were easy to kill,
                  however onboarding the heavy enemy required multiple
                  iterations.
                </p>
                <p>
                  In the example on the right, I offered the player enough
                  throwable objects to experiment around and miss their shots.
                  They cannot progress unless they defeat the conveniently
                  placed enemies.
                </p>
              </div>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/ThrowingHeavy.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">Guidance</div>
            <div className="ProjectPageDoubleMedia">
              <p>
                Throughout the onboarding section I have placed closing doors
                and alarm lights to help the player understand the navigation of
                the rest of the level.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={
                    process.env.PUBLIC_URL +
                    "/Resonance/NavigationClosingDoors.mp4"
                  }
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/AlarmLights.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Combat Encounters</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentVignette">
              In this twin-stick action game, combat was an essential part of
              the gameplay. I had to design and prototype a multitude of combat
              encounters, before being able to decide on gameplay beats that
              worked well. Through that process I have been able to identify
              distance metrics, impact of cover, and significance of enemy
              placement and how those interact with the intended design.
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Enemy placement
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To create another layer of difficulty, while reusing the
                placement of the enemies, I have used different rotations of the
                enemies. Those cause the enemies to seem either prepared for
                combat or surprised.
              </p>
              <video autoPlay loop muted controls>
                <source
                  src={
                    process.env.PUBLIC_URL + "/Resonance/UnpreparedEnemies.mp4"
                  }
                  type="video/mp4"
                />
              </video>
              <video autoPlay loop muted controls>
                <source
                  src={
                    process.env.PUBLIC_URL + "/Resonance/PreparedEnemies.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Cathartic Combat
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To encourage a gameplay style full of rampage and push-forward
                combat, I kept the spaces small enough to keep the enemies
                constantly within reach of the player, avoiding snipers lurking
                in back.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/Resonance/Bridge.png"}
                />
              </Zoom>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/Bridge.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Resource Balancing
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To achieve a balance between providing the player with
                ammunition, but not giving them endless power, I have
                distributed the throwable items in the rooms, giving the player
                ammo as they progress.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/Resonance/X.png"}
                />
              </Zoom>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/BridgeObjects.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="ProjectPageSectionContentPieceHeader">
              Cinematic Climax
            </div>
            <div className="ProjectPageDoubleMedia">
              <p>
                To finish off the level with an exciting moment that compliments
                the experience of rampage, I have scripted a combat on a bridge
                with a cinematic buildup that also disables limits on player’s
                abilities for a very short time.
              </p>
              <Zoom>
                <img
                  className="ProjectPageDoubleMediaImg"
                  src={process.env.PUBLIC_URL + "/Resonance/Cinematic.png"}
                />
              </Zoom>
              <video autoPlay loop muted controls>
                <source
                  src={process.env.PUBLIC_URL + "/Resonance/Cinematic.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Retrospective</div>
          <div className="ProjectPageSectionContent">
            <p>
              Designing a game with a very strong and specific experience vision
              was an exceptionally inspiring experience, especially since the
              entire team was on the same page when it came to we wanted game to
              become.
            </p>
            <p>
              It was a true test to my level design skills as it required a very
              focused effort that would compliment and connect all of the
              features of the game together in a playable space that can provide
              the strong player experience of breaking out of a fascist
              facility. Any shortcuts would undermine the goal I had in mind, so
              going through every step of the workflow with attention to detail
              and understanding the gameplay dynamics in-depth was crucial.
              Regular meetings and progress reports with other team members
              allowed me to get constant feedback on their experience of the
              level. Every single rooms had to undergo multiple iterations to
              consistently support the player experience.
            </p>
            <p>
              One of the most important steps of the design of this level was
              understanding the references and researching various ways to
              oppress people and instigate fear using architecture, because then
              the space of the level would serve beyond just providing exciting
              gameplay scenarios. Instead, it helped to amplify the experience
              to the extent where player feels it all even in rooms where there
              is not combat. Tight collaboration with the environment art team
              helped to create a strong identity of the level that could be
              associated with different real buildings, yet it would feel
              distinct and consistent, without feeling like a messy collage of
              different locations.
            </p>
            <p>
              Designing for a game with a strong moral message was a very
              rewarding experience, as many players were able to immerse
              themselves in our action-packed gameplay and then feel great
              satisfaction out of smashing fascists with concrete and helping a
              little girl reach freedom.
            </p>
          </div>
        </div>
        <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Recognition</div>
          <div className="ProjectPageSectionMultiContent">
            <img
              className="ProjectPageSectionMultiContentImage"
              src={process.env.PUBLIC_URL + "/Resonance/DGA-badge.png"}
            />
            <img
              className="ProjectPageSectionMultiContentImage"
              src={process.env.PUBLIC_URL + "/Resonance/BUas.png"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resonance;

// Saved

{
  /* <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Project Timeline</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageTimeline">
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Concepting</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>
                    Performing in-depth research on the player experience and
                    reference locations
                  </div>
                  <div>
                    Investigating various gameplay dynamics and combat
                    situations
                  </div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Proposal</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>Establishing level pillars and experience</div>
                  <div>Defining core gameplay</div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">
                  Pre-production
                </div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>
                    Creating in-depth layouts, diagrams and documentation
                  </div>
                  <div>Developing prototypes and block-outs</div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Production</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>QA, playtesting and iteration</div>
                  <div>
                    Implementation of scripted elements, Integration of gameplay
                    features
                  </div>
                </div>
              </div>
              <div className="ProjectPageTimelinePiece">
                <div className="ProjectPageTimelinePieceHeader">Release</div>
                <div className="ProjectPageTimelinePieceContent">
                  <div>Bug fixing</div>
                  <div>Collaboration on art pass & lighting pass</div>
                  <div>Creating in-engine tools for marketing purposes</div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
{
  /* <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Pillars</div>
          <div className="ProjectPageSectionMultiContent">
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Containment Facility
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                The level design focused on conveying an oppressive environment
                design to imprison the player character.
              </div>
            </div>
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Rampage
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                The level design fuels the rage and thirst for violence against
                the oppressors, who are unmatched against the supernatural
                powers of the player character.
              </div>
            </div>
          </div>
        </div> */
}
{
  /* <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Research and References</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPiece">
              <div className="ProjectPageSectionContentPieceContentWithImage">
                <div className="ResonanceFourByFour">
                  <Zoom>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/Resonance/oppressive2.jpg"
                      }
                    />
                  </Zoom>
                  <Zoom>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/Resonance/oppressive3.jpg"
                      }
                    />
                  </Zoom>
                </div>
                <div className="ProjectPageSectionContentPieceContent">
                  <p>
                    Oppressive architecture in the past has been used by
                    totalitarian states, which used design of the buildings to
                    establish dominance on the citizens.
                  </p>
                  <p>
                    Using the characteristic to this architecture movement
                    simple geometrical shapes, tall walls and symmetry made it
                    possible to evoke feeling of oppression, sovereignty and
                    fear in the level, especially when concrete and metal are
                    dominant materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
{
  /* <div className="ProjectPageSection">
          <div className="ProjectPageHeader">From Sketch to Layout</div>
          <div className="ProjectPageSectionContent">
            <div className="ProjectPageSectionContentPieceContent">
              <p>
                Starting out with simple geometrical shapes allowed me to
                explore direction of progression of the entire level. Setting on
                a left-to-right direction helped to sell the experience of
                prison break.
              </p>
              <p>
                Figuring out the pacing and comparative size between gameplay
                beets in a bubble diagram allowed to understand how the
                experience of the player would change and which of the areas are
                going to be key moments in gameplay.
              </p>
              <p>
                Final layout before going into blockout helped to communicate
                the entire idea to the team and explore moment-to-moment combat
                dynamics that are intended by design. The golden path of the
                gameplay and expected player actions was essential in evaluating
                playtesting data later on and making adjustments based on that.
              </p>
            </div>
            <div className="ResonanceSketchesImages">
              <div className="ResonanceSketchesImage">
                <Zoom>
                  <img src={process.env.PUBLIC_URL + "/Resonance/parti1.jpg"} />
                </Zoom>
              </div>
              <div className="ResonanceSketchesImage">
                <Zoom>
                  <img
                    src={process.env.PUBLIC_URL + "/Resonance/bubble1.jpg"}
                  />
                </Zoom>
              </div>
            </div>
            <div className="ResonanceSketchesImages">
              <Zoom>
                <img
                  className="ResonanceSketchesImageLong"
                  src={process.env.PUBLIC_URL + "/Resonance/layout1.jpg"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageSectionContentPieceContent">
              The first layout was based on two buildings connected together by
              a bridge that would serve as a transition into an area with higher
              difficulty. Steadily rising intensity of the beats was meant to
              provide player with a heightened experience as they get closer and
              closer to the exit of the prison. Combat encounters have been
              designed to smoothly transition into the next using enemies that
              can spot the player as they approach the exit of the previous
              room. The cinematic moment is supposed to serve as a final victory
              over the oppressors.
            </div>
            <div className="ResonanceSketchesImages">
              <Zoom>
                <img
                  className="ResonanceSketchesImageLong"
                  src={process.env.PUBLIC_URL + "/Resonance/parti3.jpg"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ResonanceSketchesImageLong"
                  src={process.env.PUBLIC_URL + "/Resonance/bubble3.jpg"}
                />
              </Zoom>
              <Zoom>
                <img
                  className="ResonanceSketchesImageLong"
                  src={process.env.PUBLIC_URL + "/Resonance/layout3.jpg"}
                />
              </Zoom>
            </div>
            <div className="ProjectPageSectionContentPieceContent">
              The first iteration (as it is usually expected) reached beyond the
              initial of the project. After creating a prototype and first
              playtest it quickly became apparent that player is not encouraged
              to engage in combat situations right away, usually falling back to
              much more defensive positions, escaping from enemies. Iteration
              enabled to create a much simpler navigation focused around
              left-to-right progression that was the most comfortable with the
              camera and aspect ratio that was settled on. Creating an extensive
              onboarding section that was easy to distinguish from the main
              challenge of the level ensured that the player was ready for
              proper encounters. Planning for checkpoints on the layout stage
              allowed to prepare loading and unloading script for the purpose of
              optimization which started to become an issue at that stage.
            </div>
          </div>
        </div> */
}
{
  /* <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Onboarding</div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Mechanics-reliant start
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContentImage">
                <video autoPlay loop muted controls>
                  <source
                    src={process.env.PUBLIC_URL + "/Resonance/onboarding1.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="ProjectPageSectionContentPieceContent">
                One of the key ideas about the level design was to start as
                strong as possible: to hook the player and establish the premise
                of the gameplay. In order to do that it was important to
                introduce the most impactful mechanic, telekinetic push, at the
                very beginning. To avoid unintended behaviors, the cell doors
                have been restricted to be influenced only by push, ensuring
                that the player will always make their first kill when they
                start the prison break.
              </div>
            </div>
          </div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Onboarding rooms
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContent">
                The gameplay has a very set rhythm to it: Move - Pull - Aim -
                Push, which has to be introduced to the player as clearly as
                possible. That's why the onboarding rooms are designed
                specifically to teach the player a piece of that rhythm, so that
                by the end of the onboarding section they know how every ability
                works.
              </div>
              <div className="ProjectPageSectionContentPieceContentImage">
                <video autoPlay loop muted controls>
                  <source
                    src={process.env.PUBLIC_URL + "/Resonance/onboarding2.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Heavy Enemies
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContentImage">
                <video autoPlay loop muted controls>
                  <source
                    src={process.env.PUBLIC_URL + "/Resonance/onboarding3.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="ProjectPageSectionContentPieceContent">
                A last-minute feature introduced a new enemy variant that is
                supposed to be defeated only by throwing objects at them. It was
                crucial to show the player that they are not dealing with just
                another enemy, but instead they are facing a new challenge that
                requires more than erratic button mashing in hopes to hit the
                targets. Defeating those enemies requires a full comprehension
                of the available abilities, so they could be only introduced at
                the very end of the onboarding section. Isolating them from any
                other challenges allowed to shift player focus towards this new
                challenge and differentiate it from the basic enemy type.
              </div>
            </div>
          </div>
        </div> */
}
{
  /* <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Combat Encounters</div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Unprepared enemies vs Prepared enemies
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContentImage">
                <Zoom>
                  <img
                    src={process.env.PUBLIC_URL + "/Resonance/enemies1.png"}
                  />
                </Zoom>
                <Zoom>
                  <img
                    src={process.env.PUBLIC_URL + "/Resonance/enemies2.png"}
                  />
                </Zoom>
              </div>
              <div className="ProjectPageSectionContentPieceContent">
                The main distinction about enemy placement between the
                onboarding section and the main section of the level is how the
                enemies are rotated. Detection system of the AI allows to create
                very specific zones of where the player will be detected and
                where they will have an element of surprise. The placement of
                "unaware" enemies in the onboarding section allows to let the
                player take their time to learn the abilities of their
                character, while later placement of "aware" enemies that will
                spot the player upon entry to the room helps to establish that
                this is where the real challenge starts and that from this
                moment onward the enemies will try to resist.
              </div>
            </div>
          </div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Outnumbering the player
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContent">
                One of the most important decisions about encounter design was
                to put the player at a disadvantage when it comes to numbers.
                This helped to challenge the player, but at the same time reward
                them when they defeat the enemies while outnumbered. With the
                set of telekinetic abilities available, the horde of enemies
                trying to surround and pin down the player is only partially
                threatening, as they can be disposed with a well aimed use of a
                telekinetic shockwave.
              </div>
              <div className="ProjectPageSectionContentPieceContentImage">
                <video autoPlay loop muted controls>
                  <source
                    src={process.env.PUBLIC_URL + "/Resonance/combat1.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Balancing resources
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContentImage">
                <video autoPlay loop muted controls>
                  <source
                    src={process.env.PUBLIC_URL + "/Resonance/combat2.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="ProjectPageSectionContentPieceContent">
                Almost all objects in the level can be pulled and controlled by
                the player character's telekinesis and they serve as the main
                resource for combat purposes. Striking the right balance between
                the amount of enemies and the amount of available objects helped
                to define difficulty of different beats. The objects have also
                been used to lure the player into the rooms, as they require
                ammunition to dispose of the enemies attacking them.
              </div>
            </div>
          </div>
          <div className="ProjectPageSectionContentPiece">
            <div className="ProjectPageSectionContentPieceHeader">
              Pre-scripted "cinematic-like" experience
            </div>
            <div className="ProjectPageSectionContentPieceContentWithImage">
              <div className="ProjectPageSectionContentPieceContent">
                A heavily scripted sequence on a bridge was designed to create a
                moment that would feel straight out of the movie to the player,
                a final challenge overcome and a path to freedom being at the
                reach of a hand. Disabling the limit of objects that could be
                held at once by the player allowed to provide a very fulfilling
                and cathartic experience as they released all of the objects in
                the direction of the enemies.
              </div>
              <div className="ProjectPageSectionContentPieceContentImage">
                <video autoPlay loop muted controls>
                  <source
                    src={process.env.PUBLIC_URL + "/Resonance/combat3.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div> */
}
{
  /* <div className="ProjectPageSection">
          <div className="ProjectPageHeader">Collaboration</div>
          <div className="ProjectPageSectionMultiContent">
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Unified vision
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                From the very beginning it was clear to the entire team that in
                order to make an impactful game, we need to be in tight
                collaboration between all of our strike teams and make sure that
                everyone is on the same page when it comes to the player
                experience. Regular checkups and sharing insights that came from
                research, ideation and playtesting ensured that all of the
                developers knew what needs to be done next and how.
              </div>
            </div>
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Creating oppressive experience
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                Everyone on the team knew that the oppression and breaking its
                shackles are the central story that we want to tell. The
                abilities of the character made by 3Cs designer (Character,
                Camera, Controls) provided the level design with a tool to
                destroy the oppressive facility, while the tech designer
                provided an opposing force in form of enemies that could
                populate the level design. To complete the experience, it was
                important for the level design to create a space that would feel
                oppressive to the player even without the enemies, so that their
                presence would amplify the experience even more.
              </div>
            </div>
            <div className="ProjectPageSectionMultiContentPiece">
              <div className="ProjectPageSectionMultiContentPieceHeader">
                Environmental storytelling
              </div>
              <div className="ProjectPageSectionMultiContentPieceContent">
                Through constant collaboration of the environment art team it
                was possible to tell a story of the player character without
                using words. The first room was the one that had the most focus
                when it comes to combining level design with narrative design
                and providing the art team with suggestions, ideas and design
                intention during regular meetings ensured that it could have the
                impact it was supposed to have. In a similar fashion the types
                of objects that could be found in the facility were chosen based
                on the initial level design research that was shared with the
                art team to create objects that would convey the state of the
                location and its function as well as possible.
              </div>
            </div>
          </div>
        </div> */
}
