import { RefObject } from "react";
import styles from "./Project.module.css";
import Card from "./Card.tsx";
import data from "./../Data/projectData.json";

interface ProjectProps {
  projectRef: RefObject<HTMLInputElement>;
}

function Project({ projectRef }: ProjectProps) {
  return (
    <div className={styles.project} ref={projectRef} id="project">
      <div className={styles.projectHeader}>My Projects</div>
      <div className={styles.projectCards}>
        {data.map((x) => (
          <Card
            key={new Date().getTime() * Math.random()}
            isImg={x.isImg}
            img={x.img}
            title={x.title}
            desc={x.desc}
            tech={x.tech}
            link={x.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
