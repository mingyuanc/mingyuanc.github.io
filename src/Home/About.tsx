import { TypeAnimation } from "react-type-animation";
import styles from "./About.module.css";
import profileImg from "/assets/ProfilePicture.jpg";

function About() {
  return (
    <div className={styles.about} id="about">
      <img className={styles.aboutImg} src={profileImg} alt="Profile Image" />
      <div className={styles.aboutMain}>
        <h1 className={styles.aboutTitle}>Hey there!</h1>
        <div className={styles.aboutText}>
          <h3 className={styles.typewriter}>
            I am a&nbsp;
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Student",
                1000,
                "Basketball Player",
                1000,
                "Creator",
                1000,
              ]}
              wrapper="span"
              speed={1}
              style={{ color: "#e05a0c", display: "inline-block" }}
              repeat={Infinity}
            />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
