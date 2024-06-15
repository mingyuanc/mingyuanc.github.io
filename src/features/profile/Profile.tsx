import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import styles from "./Profile.module.css";

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
            Software Engineering Intern @ GIC
          </p>
          <ul className={styles.social}>
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger>
                  <li>
                    <a
                      href="https://github.com/mingyuanc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ color: "#ffffff" }}
                        size="3x"
                      />
                    </a>
                  </li>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ming-yuan-ching-9290a322b/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "#ffffff" }}
                        size="3x"
                      />
                    </a>
                  </li>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger>
                  <li>
                    <a href="mailto:cmingyuan123@gmail.com" target="_blank">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#ffffff" }}
                        size="3x"
                      />
                    </a>
                  </li>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
