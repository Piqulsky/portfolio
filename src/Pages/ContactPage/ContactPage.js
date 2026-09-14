import ContactMe from "../../Modules/ContactMe/ContactMe";
import Footer from "../../Modules/Footer/Footer";
import Navbar from "../../Modules/Navbar/Navbar";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Navbar />
      <div className="ContactPageContent">
        <div className="ResumeContent">
          <div className="ResumeTitle">Resume Preview</div>
          <div className="ResumeSubtitle">Click the image for a PDF</div>
          <a href={process.env.PUBLIC_URL + "/CV.pdf"}>
            <div className="ResumeIMGs">
              <img
                className="ResumeIMG"
                src={process.env.PUBLIC_URL + "/cv.png"}
                alt="Resume Preview"
              ></img>
            </div>
          </a>
        </div>
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
