import type { RefObject } from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Contact.module.css";

interface ContactProps {
  contactRef: RefObject<HTMLInputElement>;
}
const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
function Contact({ contactRef }: ContactProps) {
  return (
    <div className="mt-20 scroll-mt-28" ref={contactRef} id="contact">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <div className="flex flex-col justify-center items-center text-lg">
        <h2>Want to find out more?</h2>
        <p>Let&apos;s connect!</p>
      </div>

      <div className="flex justify-center">
        <div className={styles.social}>
          <div className={styles.socialWrapper}>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ffffff" }}
              size="5x"
              onClick={() => openInNewTab("https://github.com/mingyuanc")}
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
                openInNewTab(
                  "https://www.linkedin.com/in/ming-yuan-ching-9290a322b/&apos;",
                )
              }
            />
          </div>
          <h2>Let&apos;s Connect</h2>
        </div>
        <div className={styles.social}>
          <div className={styles.socialWrapper}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#ffffff" }}
              size="5x"
              onClick={() => openInNewTab("mailto:cmingyuan123@gmail.com")}
            />
          </div>
          <h2>Email me</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
