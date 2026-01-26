import { NavLink } from "react-router";
import "./NavElementExpandable.css";
import { useState } from "react";

function NavbarElementExpandable({ name, link, subElements }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="NavbarElementExpandable"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="NavElement">
        <NavLink to={link}>{name}</NavLink>
      </div>
      {hover && (
        <div className="NavExpansion">
          {subElements.map((subEl, index) => (
            <div className="NavElement">
              <NavLink to={subEl.link}>{subEl.name}</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavbarElementExpandable;
