import { NavLink } from "react-router";
import "./Tag.css";

function Tag({ name, iconLink }) {
  let link = name.split(" ").join("");
  link = link.charAt(0).toLowerCase() + link.slice(1);

  return (
    <NavLink to={`/projects/${link}`}>
      <div className="Tag">
        {name}
        <div className="TagIcon"></div>
      </div>
    </NavLink>
  );
}

export default Tag;
