import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface ProfileProps {
  scrollToAbout: () => void;
}

function Profile({ scrollToAbout }: ProfileProps) {
  return (
    <div className={styles.profile}>
      <div className={styles["profile-top"]}>
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
                style={{ color: "#ffffff" }}
                size="3x"
                onClick={() =>
                  window.open("https://github.com/mingyuanc", "_blank")
                }
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#ffffff" }}
                size="3x"
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
                style={{ color: "#ffffff" }}
                size="3x"
                onClick={() =>
                  window.open("mailto:cmingyuan123@gmail.com", "_blank")
                }
              />
            </li>
          </ul>
        </div>
        <FontAwesomeIcon
          className={styles.bounce}
          size="3x"
          icon={faChevronDown}
          onClick={scrollToAbout}
        />
      </div>
    </div>
  );
}

export default Profile;
