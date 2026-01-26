import { NavLink } from "react-router";
import "./NavElement.css";

function NavElement({ name, link }) {
  return (
    <div className="NavElement">
      <NavLink to={link}>{name}</NavLink>
    </div>
  );
}

export default NavElement;
