import styles from "./Project.module.css";

interface CardProps {
  isImg: boolean;
  img: string;
  title: string;
  desc: string;
  tech: Array<string>;
  link: string;
}

const openInNewTab = (url: string) => {
  if (url.startsWith("https://mingyuanc.github.io/")) {
    window.location.assign(url);
    return;
  }
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function Card({ isImg, img, title, desc, tech, link }: CardProps) {
  return (
    <div className={styles.card} onClick={() => openInNewTab(link)}>
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
            <li key={new Date().getTime() * Math.random()}>{x}</li>
          ))}
        </ul>
        {link.startsWith("https://mingyuanc.github.io/") && (
          <div className={styles.demo}>Click to view demo!</div>
        )}
      </div>
    </div>
  );
}

export default Card;
