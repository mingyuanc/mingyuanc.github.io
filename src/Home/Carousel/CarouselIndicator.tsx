import styles from "./Carousel.module.css";

export interface CarouselIndicatorProps {
  activeIndex: number;
  length: number;
  onSetActiveIndex: (index: number) => void;
}

export default function CarouselIndicator({
  activeIndex,
  length,
  onSetActiveIndex,
}: CarouselIndicatorProps) {
  return (
    <div className={styles.carouselIndicator}>
      {Array.from(Array(length), (_, i) => {
        const index = length - i - 1;
        return (
          <div
            key={index}
            className={styles.carouselIndicatorDots}
            style={
              activeIndex === index
                ? { width: "1rem", opacity: 1 }
                : { width: "0.5rem", opacity: 0.5 }
            }
            onClick={() => {
              onSetActiveIndex(index);
            }}
          ></div>
        );
      })}
    </div>
  );
}
