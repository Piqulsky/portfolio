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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            scelerisque pellentesque neque sit amet mattis. Nunc et pulvinar
            massa, nec maximus tortor. Curabitur efficitur, risus id dignissim
            interdum, ex ex mattis est, ac gravida metus nisi vel ligula.
            Quisque accumsan, neque sed gravida fringilla, nisl odio suscipit
            enim, vitae molestie nibh neque sed nulla.{" "}
          </p>
          <p>
            Nullam nec nunc mi. Fusce tempor leo ut tempus tristique. Nunc
            blandit, augue ut tincidunt vulputate, lacus nisi bibendum leo, quis
            egestas dui nunc ut leo. Maecenas hendrerit sem nec ex convallis
            vehicula. Morbi sed nulla quam. Pellentesque molestie vehicula nisi
            a vulputate. Praesent mollis massa eu nisl sollicitudin maximus.
            Phasellus eu ipsum arcu. Suspendisse malesuada consequat nunc, non
            pulvinar ante.
          </p>{" "}
          <p>
            Curabitur egestas id orci non sollicitudin. Etiam odio dui,
            efficitur vitae tincidunt quis, porttitor eget leo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Quisque tempor consectetur sem sit amet pulvinar.
            Nam quis lectus rhoncus, posuere ante sed, pulvinar diam. Quisque eu
            quam eget lectus rutrum porttitor in ut erat.
          </p>{" "}
          <p>Nunc hendrerit gravida lacus, et bibendum urna suscipit eget.</p>
        </div>
        <div className="AboutMeImage"></div>
      </div>
      {/* What others said about me */}
      <div className="ResumeContent">
        <div className="ResumeTitle">Resume Preview</div>
        <div className="ResumeSubtitle">Click the image for a PDF</div>
        <div className="ResumeIMGs">
          <div className="ResumeIMG"></div>
          <div className="ResumeIMG"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
