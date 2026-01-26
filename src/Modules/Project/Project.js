import { NavLink } from "react-router";
import Tag from "../Tag/Tag";
import "./Project.css";

function Project({
  title,
  thumbnailLink,
  oneliner,
  role,
  responsibilities,
  tags,
  steam,
  itch,
  bgColor,
}) {
  return (
    <div className="Project">
      <div className="ProjectLeft">
        <div className="ProjectTitle" style={{ backgroundColor: bgColor }}>
          {title}
        </div>
        <div className="ProjectThumbnail">IMG</div>
        <div className="ProjectOneliner" style={{ backgroundColor: bgColor }}>
          {oneliner}
        </div>
      </div>
      <div className="ProjectRight">
        <div className="ProjectRole" style={{ backgroundColor: bgColor }}>
          <b>Role:</b> <i>{role}</i>
        </div>
        <div
          className="ProjectResponsibilities"
          style={{ backgroundColor: bgColor }}
        >
          <div className="ProjectResponsibilitiesTitle">Responsibilities:</div>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="ProjectTags" style={{ backgroundColor: bgColor }}>
          <div className="ProjectTagsTitle">Skills:</div>
          <div className="ProjectTagsList">
            {tags.map((tag, index) => (
              <Tag name={tag} />
            ))}
          </div>
        </div>
        <div className="ProjectButtons">
          {steam && (
            <div className="ProjectButtonSteam">
              <NavLink to="/">
                <NavLink to="/">Steam</NavLink>
              </NavLink>
            </div>
          )}
          {itch && (
            <div className="ProjectButtonItch">
              <NavLink to="/">
                <NavLink to="/">Itch</NavLink>
              </NavLink>
            </div>
          )}
          <div
            className="ProjectButtonView"
            style={{ backgroundColor: bgColor }}
          >
            <NavLink to="/">Info</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
