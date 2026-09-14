import { NavLink } from "react-router";
import Tag from "../Tag/Tag";
import "./Project.css";

function Project({
  title,
  thumbnail,
  oneliner,
  role,
  information,
  platforms,
  responsibilities,
  tags,
  steamLink,
  itchLink,
  ytLink,
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
          <video autoPlay loop muted controls>
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
          className="ProjectInformation"
          style={{ backgroundColor: bgColor }}
        >
          <div className="ProjectInformationTitle">Project Information:</div>
          {information.map((info, index) => (
            <p key={index}>
              {<i>{info.split(":")[0]}:</i>}
              {info.split(":")[1]}
            </p>
          ))}
          <p>
            <i>Platforms: </i>
            {Object.entries(platforms).map(([key, platform]) => (
              <span>
                <a href={platform}>{key} </a>&nbsp;
              </span>
            ))}
          </p>
        </div>
        <div
          className="ProjectResponsibilities"
          style={{ backgroundColor: bgColor }}
        >
          <div className="ProjectResponsibilitiesTitle">
            Responsibilities highlights:
          </div>
          {responsibilities.map((responsibility, index) => (
            <p key={index}>{responsibility}</p>
          ))}
        </div>

        {/* <div className="ProjectButtons">
          {steamLink && (
            <div className="ProjectButtonSteam">
              <NavLink to={steamLink}>Steam</NavLink>
            </div>
          )}
          {itchLink && (
            <div className="ProjectButtonItch">
              <NavLink to={itchLink}>Itch</NavLink>
            </div>
          )}
          {ytLink && (
            <div className="ProjectButtonYt">
              <NavLink to={ytLink}>YouTube</NavLink>
            </div>
          )}
          <div
            className="ProjectButtonView"
            style={{ backgroundColor: bgColor }}
          >
            <NavLink to={pageLink}>Info</NavLink>
          </div>
        </div> */}
      </div>
      <div className="ProjectTags" style={{ backgroundColor: bgColor }}>
        {/* <div className="ProjectTagsTitle">Skills:</div> */}
        <div className="ProjectTagsList">
          {tags.slice(0, 7).map((tag, index) => (
            <Tag name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
