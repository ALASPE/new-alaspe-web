'use client'
// components/Slider.js

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';

const Slider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Cambia a la siguiente imagen después de un intervalo de tiempo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, [images.length, interval]);

  // Deslizar con touch
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 50) {
      // Deslizar hacia la derecha
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else if (deltaX < -50) {
      // Deslizar hacia la izquierda
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  // Controlador de evento para cambiar imagen con botones
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          {index === currentIndex && (
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={2400}
              height={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              placeholder="blur"
              blurDataURL={image}
            />
          )}
        </div>
      ))}

      <button className={styles.prev} onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={goToNextSlide}>
        &#10095;
      </button>

      <div className= {styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
