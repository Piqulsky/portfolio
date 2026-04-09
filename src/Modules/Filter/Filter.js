import { NavLink } from "react-router";
import "../Tag/Tag.css";

function Filter({ name, callback }) {
  let link = name.split(" ").join("");
  link = link.charAt(0).toLowerCase() + link.slice(1);

  return (
    <div className="Tag" onClick={() => callback(name)}>
      {name}
      <div>
        <img
          className="TagIcon"
          src={
            process.env.PUBLIC_URL +
            "/Icons/" +
            (link == "c#" ? "c" : link) +
            ".png"
          }
          alt={`${name} icon`}
        />
      </div>
    </div>
  );
}

export default Filter;
