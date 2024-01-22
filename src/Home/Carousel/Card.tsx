import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Carousel.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface CardProps {
  item: {
    img: string;
    title: string;
    desc: string;
    link?: string;
    github: string;
    tech: string[];
  };
  isActive: boolean;
}

export default function Card({ item, isActive }: CardProps) {
  return (
    <div className={styles.card}>
      <div
        className={`${styles.carouselDemo} ${
          isActive && item.link ? styles.popOut : ""
        }`}
      >
        <a href={item.link} target="_blank" rel="noreferrer">
          CLICK TO VIEW DEMO!
        </a>
      </div>
      <h1>{item.title}</h1>
      <div className={styles.cardImg}>
        <img src={item.img} alt={item.title} />
      </div>
      <div className={styles.cardContent}>
        <p>{item.desc}</p>
        <div className={styles.cardTech}>
          {item.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.cardLinks}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#333" }}
            size="2x"
          />
          <a href={item.github} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
