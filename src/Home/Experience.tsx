import { RefObject } from "react";
import styles from "./Experience.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";

interface ExpProps {
  expRef: RefObject<HTMLInputElement>;
}

import data from "./expData.json";

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: "rgb(00, 00,00)", color: "#fff" },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "rgb(00, 00,00)", color: "#fff" },
};

function Experience({ expRef }: ExpProps) {
  return (
    <div className={styles.exp} ref={expRef}>
      <div className={styles.expHeader}>My Experiences</div>
      <VerticalTimeline>
        {data.map((d) => (
          <VerticalTimelineElement
            key={new Date().getTime() * Math.random()}
            className="vertical-timeline-element--work"
            date={d.date}
            contentStyle={{ fontSize: "clamp(1rem,3vw,1.2rem)" }}
            contentArrowStyle={{ borderRight: "none" }}
            {...(d.icon === "workIcon" ? workIcon : schoolIcon)}
          >
            <div className={styles.header}>
              <img
                className={styles.headerImg}
                src={d.img}
                style={{ display: "inline" }}
              />
              <div>
                <h3 className="vertical-timeline-element-title">{d.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {d.subtitle}
                </h4>
              </div>
            </div>

            <p>{d.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
