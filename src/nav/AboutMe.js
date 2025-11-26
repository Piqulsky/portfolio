import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaLink } from "react-icons/fa";
import "./AboutMe.css";
import NavBar from "../reusable/NavBar";
import Footer from "../reusable/Footer";

function AboutMe() {
  return (
    <div className="about">
      <NavBar />

      <div className="profile-text">
        <h1>Michał Pikulski</h1>
        <p className="subtitle">
          Game Designer | Creating games that tell a story
        </p>
      </div>

      <div className="about-me-page">
        <div className="side-profile">
          <img
            src={`${process.env.PUBLIC_URL}/avatar.jpg`}
            alt="Michał Pikulski"
            className="profile-photo"
          />
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          {/* <p>
            Games have long been underappreciated, yet they hold immense
            potential as tools for change. As one of the most immersive media
            available today, video games uniquely blend storytelling, education,
            and entertainment. Well-crafted games can engage players deeply,
            making them both enjoyable and impactful. With applications in
            psychology and neuroscience, games are poised to shape the future of
            therapy, education, and social change, advancing these fields in
            meaningful ways.
          </p> */}
          <p>
            Hello! My name is Michał Pikulski, and I am a passionate game
            designer and developer. I am dedicated to creating games that are
            beneficial to the players. I'm 20 years old and already I have
            created projects, both solo and in teams, that are advanced and tap
            into what attracts players to games.
          </p>
          <p>
            Currently I am studying at Breda University of Applied Sciences in
            the Netherlands. Through the Creative Media and Game Technologies
            course, I am learning how to create games that are not only fun but
            also interact with players on multiple levels - emotionally,
            socially, physically and psychologically.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutMe;
