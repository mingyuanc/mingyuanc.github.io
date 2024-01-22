import { RefObject } from "react";
import styles from "./Project.module.css";

import data from "./../Data/projectData.json";
import Carousel from "./Carousel/Carousel.tsx";

interface ProjectProps {
  projectRef: RefObject<HTMLInputElement>;
}

function Project({ projectRef }: ProjectProps) {
  return (
    <div className={styles.project} ref={projectRef} id="project">
      <div className={styles.projectHeader}>Notable Projects</div>
      <div className={styles.projectCards}>
        <Carousel items={data} />
      </div>
    </div>
  );
}

export default Project;
