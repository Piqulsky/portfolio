import Footer from "../../Modules/Footer/Footer";
import Navbar from "../../Modules/Navbar/Navbar";
import "./WIP.css";

function WIP() {
  return (
    <div className="WIP">
      <Navbar />
      <div className="WIPContent">
        <div className="WIPHeader">Work In Progress</div>
        <div className="WIPSubHeader">
          This portfolio is still young and so it is still growing! This page
          did not have time yet to develop... but it will in the future!
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WIP;
