import "./Navbar.css";
import NavElement from "./NavElement/NavElement";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="LeftBox">Michał Pikulski</div>
      <div className="RightBox">
        <NavElement name="Home" link="/" />
        <NavElement name="My Projects" link="/" />
        <NavElement name="Other Endeavors" link="/" />
        <NavElement name="About & Resume" link="/" />
        <NavElement name="Contact Me" link="/" />
      </div>
    </div>
  );
}

export default Navbar;
