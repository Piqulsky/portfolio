import { NavLink } from "react-router";
import Tag from "../Tag/Tag";
import "./Project.css";

function Project({
  title,
  thumbnail,
  oneliner,
  role,
  responsibilities,
  tags,
  steamLink,
  itchLink,
  pageLink,
  bgColor,
}) {
  return (
    <div className="Project">
      <div className="ProjectLeft">
        <div className="ProjectTitle" style={{ backgroundColor: bgColor }}>
          "{title}"
        </div>
        <div className="ProjectThumbnail">
          <video autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + thumbnail} type="video/mp4" />
          </video>
        </div>
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
            {tags.slice(0, 3).map((tag, index) => (
              <Tag name={tag} />
            ))}
          </div>
        </div>
        <div className="ProjectButtons">
          {steamLink && (
            <div className="ProjectButtonSteam">
              <NavLink to={steamLink}>
                <NavLink to="/">Steam</NavLink>
              </NavLink>
            </div>
          )}
          {itchLink && (
            <div className="ProjectButtonItch">
              <NavLink to={itchLink}>
                <NavLink to="/">Itch</NavLink>
              </NavLink>
            </div>
          )}
          <div
            className="ProjectButtonView"
            style={{ backgroundColor: bgColor }}
          >
            <NavLink to={pageLink}>Info</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
