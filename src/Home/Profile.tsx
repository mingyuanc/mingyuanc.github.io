import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Body() {
  return (
    <div className="profile">
      <div className="profile-top">
        <img src="./src/assets/ProfilePicture.jpg" alt="Profile Pic"></img>
      </div>
      <div className="profile-bottom">
        <h1 className="profile-banner">Ching Ming Yuan</h1>
        <p className="profile-desc">
          Full stack developer | National University of Singapore Computer
          Science | NUS Merit Scholar
        </p>

        <ul className="social">
          <li>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#588de9" }}
              size="4x"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#588de9" }}
              size="4x"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#588de9" }}
              size="4x"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Body;
