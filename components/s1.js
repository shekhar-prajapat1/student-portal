import { useState } from 'react';
import styles from './Slider.module.css'; // import your CSS

const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg']; // Add your image paths here

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slide} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <button onClick={prevSlide} className={styles.leftArrow}>
          &#10094;
        </button>
        <button onClick={nextSlide} className={styles.rightArrow}>
          &#10095;
        </button>
      </div>
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${currentIndex === idx ? styles.active : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
