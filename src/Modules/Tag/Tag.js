import { NavLink } from "react-router";
import "./Tag.css";

function Tag({ name, iconLink, link }) {
  return (
    <NavLink to="/">
      <div className="Tag">
        {name}
        <div className="TagIcon"></div>
      </div>
    </NavLink>
  );
}

export default Tag;
