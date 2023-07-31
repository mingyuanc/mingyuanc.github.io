import styles from "./Experience.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";

interface Exp {
  img: string;
  color: string;
  icon: string;
  date: string;
  title: string;
  subtitle: string;
  desc: Array<string>;
}

interface ExpProps {
  type: "My Work Experiences" | "Other Experiences";
  data: Array<Exp>;
}

function Experience({ type, data }: ExpProps) {
  return (
    <div className={styles.exp}>
      <div className={styles.expHeader}>{type}</div>
      <VerticalTimeline>
        {data.map((d) => (
          <VerticalTimelineElement
            key={new Date().getTime() * Math.random()}
            className="vertical-timeline-element--work"
            date={d.date}
            contentStyle={{ fontSize: "clamp(1rem,3vw,1.2rem)" }}
            contentArrowStyle={{ borderRight: "none" }}
            {...(d.icon === "workIcon"
              ? {
                  icon: <FontAwesomeIcon icon={faBriefcase} />,
                  iconStyle: { background: d.color, color: "#fff" },
                }
              : {
                  icon: <FontAwesomeIcon icon={faSchool} />,
                  iconStyle: { background: d.color, color: "#fff" },
                })}
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
            <ul className={styles.desc}>
              {d.desc.map((x) => (
                <li> {x}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
