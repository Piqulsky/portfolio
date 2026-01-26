import ContactMe from "../../Modules/ContactMe/ContactMe";
import Footer from "../../Modules/Footer/Footer";
import Navbar from "../../Modules/Navbar/Navbar";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Navbar />
      <div className="ContactPageContent">
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
