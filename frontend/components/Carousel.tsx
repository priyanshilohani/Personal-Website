"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Carousel.module.css";

// Carousel Slides Data
const slides = [
  {
    id: 1,
    image: "/images/slide.webp",
    text: "Hi, I'm Priyanshi",
    link: "/about",
  },
  {
    id: 2,
    image: "/images/slide.webp",
    text: "Welcome to my personal website",
    link: "/about",
  },
  {
    id: 3,
    image: "/images/slide.webp",
    text: "Learn more about me",
    link: "/about",
  },
  {
    id: 4,
    image: "/images/slide.webp",
    text: "Here are some things I've worked on",
    link: "/projects",
  },
  {
    id: 5,
    image: "/images/slide.webp",
    text: "Check out my published Research Papers",
    link: "/research",
  },
  {
    id: 6,
    image: "/images/slide.webp",
    text: "Check out the programs I've participated in",
    link: "/programs",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide Effect (Change every 5 seconds)
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Navigate to Next Slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Navigate to Previous Slide
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Manual Slide Navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.carousel}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : ""
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.text}
            fill
            className={styles.image}
            priority
          />
          <div className={styles.textContainer}>
            <h2>{slide.text}</h2>
            <a href={slide.link} className={styles.button}>
              Explore →
            </a>
          </div>
        </div>
      ))}

      {/* Left and Right Navigation Buttons */}
      <button onClick={goToPrevSlide} className={`${styles.navButton} ${styles.left}`}>
        ❮
      </button>
      <button onClick={goToNextSlide} className={`${styles.navButton} ${styles.right}`}>
        ❯
      </button>

      {/* Navigation Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
