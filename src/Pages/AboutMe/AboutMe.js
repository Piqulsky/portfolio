import { useEffect, useState } from "react";
import Footer from "../../Modules/Footer/Footer";
import Navbar from "../../Modules/Navbar/Navbar";
import Recommendation from "../../Modules/Recommendation/Recommendation";
import Tag from "../../Modules/Tag/Tag";
import "./AboutMe.css";

function AboutMe() {
  const [recommendations, setRecommendations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRecommendation = () => {
    setCurrentIndex(
      currentIndex < recommendations.length - 1 ? currentIndex + 1 : 0,
    );
  };

  const previousRecommendation = () => {
    setCurrentIndex(
      currentIndex > 0 ? currentIndex - 1 : recommendations.length - 1,
    );
  };

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/Recommendations/recommendations.json`)
      .then((response) => response.json())
      .then((data) => setRecommendations(data))
      .catch((error) => console.error("Error loading recommendations:", error));
  }, []);

  const skills = [
    "Unreal Engine 5",
    "Unity",
    "Godot Engine",
    "Game Design",
    "Level Design",
    "System Design",
    "Technical Design",
    "Combat Design",
    "Puzzle Design",
    "Tabletop Design",
    "Multiplayer",
    "Virtual Reality",
    "Visual Scripting",
    "Lighting",
    "Environment Art",
    "Virtual Production",
    "Filmmaking",
    "C#",
    "ReactJs",
    "Git",
    "Perforce",
    "Miro",
    "Scrum",
    "Taiga",
    "Trello",
    "Confluence",
  ];
  return (
    <div className="AboutMe">
      <Navbar />
      <div className="AboutMeTitle">About Me</div>
      <div className="AboutMeContent">
        <div className="AboutMeText">
          <p>
            Hello there! I'm Michał and I'm a game designer specialized in level
            design and creating player-centric experiences. I am experienced in
            working in small multi-disciplinary teams, designing intractable
            level ingredients, concept-to-shipped level development, and feature
            ownership.
          </p>
          <p>
            Now, I am studying game design at Breda University of Applied
            Sciences in the Netherlands, where I am honing my skills as a level
            design professional.
          </p>
          <p>
            In my level design, I always prioritize the intended player
            experience and immersing the player in the flow state. By rapid
            prototyping and early playtesting I am able to iterate on ideas
            early enough in the process to validate the level layouts and make
            necessary improvements to keep the player engaged in gameplay.
          </p>
          <p>
            I treat myself as a level designer, but along the way I have
            experienced all kinds of bits and pieces of game design. From
            gameplay design, through narrative design, audio design, quest
            design, technical design, to systems design, I have been able to try
            it all in one way or another.
          </p>
        </div>
        <img
          className="AboutMeImage"
          src={process.env.PUBLIC_URL + "/profile.jpeg"}
        ></img>
      </div>
      <div className="AboutMeTitle">Achievements</div>
      <div className="AboutMeContent">
        <img
          className="AchievementImage"
          src={process.env.PUBLIC_URL + "/Resonance/DGA-badge.png"}
        />
        <div className="AchievementText">
          <p>Dutch Game Awards 2025 – Best Student Game Finalist</p>

          <p>Issued by Dutch Game Association · Sep 2023</p>

          <p>Obtained for my role as a Level Designer on “Resonance”</p>
        </div>
      </div>
      <div className="AboutMeTitle">Skills</div>
      <div className="AboutMeContentNoFlex">
        <div className="AboutMeSubheader">
          Click to see associated projects:
        </div>
        <div className="SkillList">
          {skills.map((tag, index) => (
            <Tag name={tag} />
          ))}
        </div>
      </div>
      <div className="AboutMeTitle">Recommendations</div>
      <div className="AboutMeContent">
        <div className="RecommendationBox">
          <button onClick={previousRecommendation}>
            <img
              className="RecommendationArrowLeft"
              src={process.env.PUBLIC_URL + "/arrowleft.png"}
            />
          </button>
          <Recommendation {...recommendations[currentIndex]} />
          <button onClick={nextRecommendation}>
            <img
              className="RecommendationArrowRight"
              src={process.env.PUBLIC_URL + "/arrowright.png"}
            />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
