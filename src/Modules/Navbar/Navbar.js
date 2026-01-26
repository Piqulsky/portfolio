import "./Navbar.css";
import NavElement from "./NavElement/NavElement";
import NavbarElementExpandable from "./NavElementExpandable/NavElementExpandable";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="LeftBox">Michał Pikulski</div>
      <div className="RightBox">
        <NavElement name="Home" link="/" />
        <NavbarElementExpandable
          name="My Projects"
          link="/"
          subElements={[
            { name: "Resonance", link: "/" },
            { name: "Prohibition Time", link: "/" },
            { name: "Moonsoup", link: "/" },
          ]}
        />
        <NavbarElementExpandable
          name="Other Endeavors"
          link="/"
          subElements={[
            { name: "Game Jams", link: "/" },
            { name: "Game Mastering", link: "/" },
            { name: "Adventurers' League", link: "/" },
            { name: "Miro Templates", link: "/" },
            { name: "Design Bible", link: "/" },
          ]}
        />
        <NavElement name="About & Resume" link="/aboutme" />
        <NavElement name="Contact Me" link="/contact" />
      </div>
    </div>
  );
}

export default Navbar;
