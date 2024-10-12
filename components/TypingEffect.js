import { useState, useEffect } from 'react';
import styles from './TypingEffect.module.css'; 

const TypingEffect = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }
    };

    const intervalId = setInterval(type, speed);

    return () => clearInterval(intervalId); 
  }, [index, text, speed]);

  return (
    <div 
             className={styles.typingEffect}>
   
      {displayedText}
    </div>
  );
};

export default TypingEffect;
