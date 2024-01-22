import { useState } from "react";

import CarouselItem from "./CarouselItem";
import CarouselIndicator from "./CarouselIndicator";

import styles from "./Carousel.module.css";

export interface CarouselProps {
  items: {
    img: string;
    title: string;
    desc: string;
    link?: string;
    github: string;
    tech: string[];
  }[];
}

export default function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(items.length - 2);
  return (
    <div className={styles.container}>
      {items?.map((item, index) => (
        <CarouselItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          item={item}
          onSetActiveIndex={(activeIndex) => {
            setActiveIndex(activeIndex);
          }}
        />
      ))}
      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
  );
}
