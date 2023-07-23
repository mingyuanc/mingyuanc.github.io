import { RefObject } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface ContactProps {
  contactRef: RefObject<HTMLInputElement>;
}

function Contact({ contactRef }: ContactProps) {
  return (
    <div className={styles.contact} ref={contactRef}>
      <div className={styles.contactHeader}>
        <h1 style={{ color: "#f06000" }}>Contact</h1>
        <h2>Want to find out more?</h2>
        <p>Lets connect!</p>
      </div>
      <div className={styles.socials}>
        <div className={styles.social}>
          <div className={styles.socialWrapper}>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ffffff" }}
              size="5x"
              onClick={() =>
                window.open("https://github.com/mingyuanc", "_blank")
              }
            />
          </div>
          <h2>View my code</h2>
        </div>
        <div className={styles.social}>
          <div className={styles.socialWrapper}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
              size="5x"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ming-yuan-ching-9290a322b/",
                  "_blank"
                )
              }
            />
          </div>
          <h2>Let's Connect</h2>
        </div>
        <div className={styles.social}>
          <div className={styles.socialWrapper}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#ffffff" }}
              size="5x"
              onClick={() =>
                window.open("mailto:cmingyuan123@gmail.com", "_blank")
              }
            />
          </div>
          <h2>Email me</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
