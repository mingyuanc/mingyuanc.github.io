import Card from "./Card";
import styles from "./Carousel.module.css";

export interface CardProps {
  index: number;
  activeIndex: number;
  onSetActiveIndex: (index: number) => void;
  item: {
    img: string;
    title: string;
    desc: string;
    link?: string;
    github: string;
    tech: string[];
  };
}

export default function CarouselItem({
  index,
  activeIndex,
  onSetActiveIndex,
  item,
}: CardProps) {
  console.log(index, activeIndex);

  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  // for rotated cards
  //   rotate(calc(${offset} * -45deg))
  //   scaleY(calc(1 +  ${absOffset}  * -0.5))
  //   translateX(calc( ${direction} * -12rem))
  //   translateZ(calc( ${absOffset} * -35rem))
  //   scale(${scaled && index === activeIndex ? 6.5 : 1})

  const cssTransformProperties = `
        rotateY(calc(${offset} * 55deg))
        scaleY(calc(1 +  ${absOffset}  * -0.5))
        translateX(calc( ${direction} * -6rem))
        translateZ(calc( ${absOffset} * -35rem))
       `;

  const inView = Math.abs(index - activeIndex) <= 2;

  return (
    <div
      className={styles.carouselItem}
      style={{
        transform: cssTransformProperties,
        opacity: inView ? 1 : 0,
        display: inView ? "block" : "none",
        cursor: inView && index !== activeIndex ? "pointer" : "default",
      }}
      onClick={() => {
        index !== activeIndex && inView ? onSetActiveIndex(index) : null;
      }}
    >
      <Card item={item} isActive={index === activeIndex} />
    </div>
  );
}
