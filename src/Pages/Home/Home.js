import "./Home.css";
import Navbar from "../../Modules/Navbar/Navbar";
import Footer from "../../Modules/Footer/Footer";
import Project from "../../Modules/Project/Project";
import Tag from "../../Modules/Tag/Tag";
import ContactMe from "../../Modules/ContactMe/ContactMe";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="HomeContent">
        <div className="Intro">
          {/* Video Background */}
          <div className="IntroName">
            Michał Pikulski
            <div className="IntroJobTitle">Game Designer</div>
          </div>
        </div>
        <div className="FeaturedProjects">
          <div className="FeaturedProjectsTitle">Featured Projects:</div>
          <div className="FeaturedProjectsList">
            <Project
              title="Resonance"
              thumbnailLink="/"
              oneliner="A fast twin-stick action game. Use your telekinetic voice to lift and control objects and enemies, allowing you to shield yourself and fight! Escape the facility trying to keep you under its control."
              role="Level Designer"
              responsibilities={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus. Cras pulvinar sem metus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus.",
              ]}
              tags={["Unreal Engine 5", "Level Design", "Game Design"]}
              steam={true}
              itch={false}
              bgColor="#220000"
            />
            <Project
              title="Prohibition Time"
              thumbnailLink="/"
              oneliner="An online multiplayer game. The game combines elements of the social deduction game “Mafia” (also known as “Werewolf”) extended by our team with cards and special actions."
              role="Technical Designer"
              responsibilities={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus. Cras pulvinar sem metus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus.",
              ]}
              tags={["ReactJS", "Tech Design", "Game Design"]}
              steam={false}
              itch={false}
              bgColor="#002200"
            />
            <Project
              title="Moonsoup"
              thumbnailLink="/"
              oneliner="A 2D simulator game about running a potion shop set in a medieval fantasy setting. The game combines logical puzzles and mini-games in a design that focuses on creating a casual and relaxing gameplay."
              role="System Designer"
              responsibilities={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus. Cras pulvinar sem metus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in mauris purus.",
              ]}
              tags={["Unity", "System Design", "C#"]}
              steam={false}
              itch={false}
              bgColor="#220022"
            />
            <div className="FeaturedProjectMore">
              <NavLink to="/">See more projects...</NavLink>
            </div>
          </div>
        </div>
        <div className="Skills">
          <div className="SkillsTitle">Skills:</div>
          <div className="SkillsMore">
            Click each of the skills to discover more:
          </div>
          <div className="SkillsList">
            {[
              "Unreal Engine",
              "Unity",
              "Godot Engine",
              "Game Design",
              "Level Design",
              "System Design",
              "Technical Design",
              "C#",
              "ReactJS",
              "Git",
              "Perforce",
              "Miro",
              "Visual Scripting",
              "Scrum",
            ].map((tag, index) => (
              <Tag name={tag} />
            ))}
          </div>
        </div>
        {/* Potentially recommendations */}
        <div className="HomeContactMe">
          <ContactMe />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
