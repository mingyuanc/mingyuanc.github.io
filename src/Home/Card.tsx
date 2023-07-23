import styles from "./Project.module.css";

interface CardProps {
  isImg: boolean;
  img: string;
  title: string;
  desc: string;
  tech: Array<string>;
  link: string;
}
// TODO add a automatic image slideshow

function Card({ isImg, img, title, desc, tech, link }: CardProps) {
  return (
    <div className={styles.card} onClick={() => (window.location.href = link)}>
      {isImg ? (
        <img src={img} alt={title} />
      ) : (
        <video autoPlay loop muted>
          <source src={img} type="video/mp4" />
        </video>
      )}
      <div className={styles.cardDesc}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <ul>
          {tech.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
