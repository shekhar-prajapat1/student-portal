import Link from 'next/link';
import styles from './Header.module.css';


const Headerc = () => {
  return (
   
    <header className={styles.header}>
     
      <div className={styles.logo}>
        <h2>DailiGo</h2>
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