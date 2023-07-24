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
              <a
                href="https://github.com/mingyuanc"
                target="_blank"
                rel="noopener,noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "#ffffff" }}
                  size="3x"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ming-yuan-ching-9290a322b/"
                target="_blank"
                rel="noopener,noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#ffffff" }}
                  size="3x"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:cmingyuan123@gmail.com"
                target="_blank"
                rel="noopener,noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#ffffff" }}
                  size="3x"
                />
              </a>
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
