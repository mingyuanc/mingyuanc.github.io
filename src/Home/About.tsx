import { RefObject } from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.css";
import profileImg from "/assets/ProfilePicture.webp";
import resume from "/assets/ChingMingYuan.pdf";

interface AboutProps {
  aboutRef: RefObject<HTMLInputElement>;
  scrollToProjects: () => void;
}

function About({ aboutRef, scrollToProjects }: AboutProps) {
  return (
    <div className={styles.about} ref={aboutRef}>
      <img className={styles.aboutImg} src={profileImg} alt="Profile Image" />
      <div className={styles.aboutMain}>
        <h1 className={styles.aboutTitle}>Hey there!</h1>
        <div className={styles.aboutText}>
          <h3 className={styles.typewriter}>
            I am a&nbsp;
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Developer.",
                2000,
                "Student.",
                2000,
                "Basketball Player.",
                2000,
                "Creator.",
                2000,
                "Technology fanatic.",
                2000,
              ]}
              wrapper="span"
              speed={1}
              style={{ color: "#e05a0c", display: "inline-block" }}
              repeat={Infinity}
            />
          </h3>
          <p className={styles.aboutText}>
            I am a passionate Computer Science student studying at the National
            University of Singapore (NUS), with a keen interest in the
            fascinating world of Artifical Intelligence. Aspiring to become a
            skilled software developer, I am constantly exploring the dynamic
            realm of programming and its various technologies. I am proficient
            in Typescript, Java, and Python, and enjoy developing web
            applications using React. Also, I have completed coursework and
            personal project to sate my curiousity as well as hone my technical
            abilties. When I'm not immersed in coding or academics, you'll find
            me engaging in various sports activities like basketball, running
            and squash, staying active and energised. If you share my passion
            for technology or think that I am a good fit, I would love to
            connect with you!
          </p>
        </div>
        <div className={styles.links} onClick={scrollToProjects}>
          <button className={styles.aboutButton}>
            View my projects&nbsp;
            <FontAwesomeIcon
              className={styles.bounce}
              style={{ color: "000000" }}
              icon={faArrowDown}
              size="2x"
              onClick={() => console.log("printed")}
            />
          </button>
          <button
            className={styles.aboutButton}
            onClick={() => window.open(resume)}
          >
            View my resume&nbsp;
            <FontAwesomeIcon
              style={{ color: "000000" }}
              className={styles.bounceR}
              icon={faArrowRight}
              size="2x"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
