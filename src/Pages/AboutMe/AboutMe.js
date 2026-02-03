import Footer from "../../Modules/Footer/Footer";
import Navbar from "../../Modules/Navbar/Navbar";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <Navbar />
      <div className="AboutMeTitle">About Me</div>
      <div className="AboutMeContent">
        <div className="AboutMeText">
          <p>
            Hello there! I'm Michał and I'm a game designer. I have been
            creating games for more than 5 years now and what started as a hobby
            has now become my professional passion. I started out learning
            software and web development, but quickly after finishing the
            school, I realized that these fields are not fit for my creative
            drive and I should come back to creating something more playful.
          </p>
          <p>
            Now, I am studying game design at Breda University of Applied
            Sciences in the Netherlands, where I have learned how to leave my
            amateurish habits behind and start creating games as a professional
            game designer. I learned to thrive in a team environment, rapidly
            create prototypes, and iterate on my designs based on player
            feedback. All of these skills I have acquired helped in
            understanding an industry-grade game development cycle.
          </p>
          <p>
            I treat myself as a game designer, but along the way I have
            experiened all kinds of bits and pieces of game design. From level
            design, through narrative design, audio design, quest design,
            technical design, to systems design, I have been able to try it all
            in one way or another. It created a perspective of how a game comes
            to become as a cohesive experience, which I believe helps me to
            design full game experiences.
          </p>
          <p>
            "A jack of all trades is a master of none, but often times better
            than a master of one." - William Shakespeare
          </p>
        </div>
        <img
          className="AboutMeImage"
          src={process.env.PUBLIC_URL + "/profile.jpeg"}
        ></img>
      </div>
      {/* What others said about me */}
      <div className="ResumeContent">
        <div className="ResumeTitle">Resume Preview</div>
        <div className="ResumeSubtitle">Click the image for a PDF</div>
        <a href={process.env.PUBLIC_URL + "/CV.pdf"}>
          <div className="ResumeIMGs">
            <img
              className="ResumeIMG"
              src={process.env.PUBLIC_URL + "/CV.png"}
              alt="Resume Preview"
            ></img>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
