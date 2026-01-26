import { NavLink } from "react-router";
import "./NavElement.css";

function NavElement({ name, link }) {
  return (
    <NavLink to={link}>
      <div className="NavElement">{name}</div>
    </NavLink>
  );
}

export default NavElement;
