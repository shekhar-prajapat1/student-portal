// Headerc.js
import Link from 'next/link';
import styles from './Header.module.css';

const Headerc = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/favicon.png" alt="Logo" />
      </div>
      <div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/courses">
              Courses
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/quizzes">
              Quizzes
            </Link>
          </li>
        </ul>
       
      </nav>
      </div>
      
      <div className={styles.navItem}>
      <Link href="/login">
        <button className={styles.button}>Login</button>
      </Link>    
            
        </div>
    </header>
  );
};

export { Headerc };