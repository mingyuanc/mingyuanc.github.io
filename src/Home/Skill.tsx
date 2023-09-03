import { RefObject, useState, useEffect, useRef } from "react";
import styles from "./Skill.module.css";
import lang from "./../Data/skillData.json";
import tech from "./../Data/skillDataTech.json";
import waveImg from "/assets/wave.svg";

interface SkillProps {
  skillRef: RefObject<HTMLInputElement>;
}

function Skill({ skillRef }: SkillProps) {
  const [isLangIntersecting, setIsLangIntersecting] = useState(false);
  const [isTechIntersecting, setIsTechIntersecting] = useState(false);
  const langRef = useRef<HTMLInputElement>(null);
  const techRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIsLangIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-20%" }
    );
    observer.observe(langRef.current!);
    return () => observer.disconnect();
  }, [isLangIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIsTechIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-20%" }
    );
    observer.observe(techRef.current!);
    return () => observer.disconnect();
  }, [isTechIntersecting]);

  useEffect(() => {
    if (isLangIntersecting) {
      langRef.current!.querySelectorAll(`div.${styles.tech}`).forEach((el) => {
        el.classList.add(styles["slide-in"]);
      });
    }
  }, [isLangIntersecting]);

  useEffect(() => {
    if (isTechIntersecting) {
      techRef.current!.querySelectorAll(`div.${styles.tech}`).forEach((el) => {
        el.classList.add(styles["slide-in"]);
      });
    }
    // else {
    //   techRef.current!.querySelectorAll(`div.${styles.tech}`).forEach((el) => {
    //     el.classList.remove(styles["slide-in"]);
    //   });
    // }
  }, [isTechIntersecting]);

  return (
    <div className={styles.skill} ref={skillRef} id="skill">
      <div className={styles.skillHeader}>My skills</div>
      <div className={styles.skillContainer}>
        <div className={styles.techContainer}>
          <h1>Languages I am comfortable in</h1>
          <div className={styles.teches} ref={langRef}>
            {lang.map((i) => (
              <div key={i.img} className={styles.tech}>
                <p key={i.img} className={styles.techDesc}>
                  {i.name}
                </p>
                <img
                  key={i.name}
                  className={styles.techImg}
                  src={i.img}
                  alt={i.name}
                  id={i.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.techContainer}>
          <h1>Technologies I have used</h1>
          <div className={styles.teches} ref={techRef}>
            {tech.map((i) => (
              <div key={i.img} className={styles.tech}>
                <p key={i.img} className={styles.techDesc}>
                  {i.name}
                </p>
                <img
                  key={i.name}
                  className={styles.techImg}
                  src={i.img}
                  alt={i.name}
                  id={i.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={waveImg} className={styles.transition} />
    </div>
  );
}

export default Skill;
