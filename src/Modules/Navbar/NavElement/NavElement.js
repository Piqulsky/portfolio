import { NavLink, useLocation } from "react-router";
import "./NavElement.css";

function NavElement({ name, link }) {
  return (
    <NavLink to={link}>
      <div
        className={
          useLocation().pathname === link ? "NavElementActive" : "NavElement"
        }
      >
        {name}
      </div>
    </NavLink>
  );
}

export default NavElement;
