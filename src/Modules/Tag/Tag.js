import { NavLink } from "react-router";
import "./Tag.css";

function Tag({ name }) {
  let link = name.split(" ").join("");
  link = link.charAt(0).toLowerCase() + link.slice(1);

  return (
    <NavLink to={`/projects/${link}`}>
      <div className="Tag">
        {name}
        <div>
          <img
            className="TagIcon"
            src={
              process.env.PUBLIC_URL +
              "/icons/" +
              (link == "c#" ? "c" : link) +
              ".png"
            }
            alt={`${name} icon`}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default Tag;
