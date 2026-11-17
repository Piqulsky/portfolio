import { NavLink } from "react-router";
import Tag from "../Tag/Tag";
import "./Project.css";
import { useState } from "react";

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
  featured,
  badgeSource,
}) {
  const [tagLimit, setLiimit] = useState(window.innerWidth > 920 ? 6 : 3);

  return (
    <div className="Project">
      <div className="ProjectLeft">
        <div className="ProjectTitle" style={{ backgroundColor: bgColor }}>
          <div className="ProjectTitleText">"{title}"</div>
        </div>
        <div className="ProjectThumbnail">
          <video autoPlay loop muted controls>
            <source src={process.env.PUBLIC_URL + thumbnail} type="video/mp4" />
          </video>
          {badgeSource ? (
            <img
              className="ProjectBadge"
              src={process.env.PUBLIC_URL + badgeSource}
            />
          ) : (
            ""
          )}
        </div>
        <div className="ProjectOneliner" style={{ backgroundColor: bgColor }}>
          {oneliner}
        </div>
        <div className="ProjectTags" style={{ backgroundColor: bgColor }}>
          {/* <div className="ProjectTagsTitle">Skills:</div> */}
          <div className="ProjectTagsList">
            {tags.slice(0, tagLimit).map((tag, index) => (
              <Tag name={tag} />
            ))}
          </div>
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
          <div className="ProjectResponsibilitiesTitle">
            Responsibilities highlights:
          </div>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div
          className="ProjectInformation"
          style={{ backgroundColor: bgColor }}
        >
          <span className="ProjectInformationTitle">Project Information:</span>
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
        <NavLink to={pageLink}>
          <div className="ProjectMore">Read More {">"}</div>
        </NavLink>
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
    </div>
  );
}

export default Project;
