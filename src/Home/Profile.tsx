import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Body() {
  return (
    <div className={styles.profile}>
      <div className={styles["profile-top"]}>
        <img src="./src/assets/ProfilePicture.jpg" alt="Profile Pic"></img>
      </div>
      <div className={styles["profile-bottom"]}>
        <h1 className={styles["profile-banner"]}>Ching Ming Yuan</h1>
        <p className={styles["profile-desc"]}>
          Full stack web developer | National University of Singapore Computer
          Science | NUS Merit Scholar
        </p>

        <ul className={styles.social}>
          <li>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#588de9" }}
              size="4x"
              onClick={() =>
                window.open("https://github.com/mingyuanc", "_blank")
              }
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#588de9" }}
              size="4x"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ming-yuan-ching-9290a322b/",
                  "_blank"
                )
              }
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#588de9" }}
              size="4x"
              onClick={() =>
                window.open("mailto:cmingyuan123@gmail.com", "_blank")
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Body;
