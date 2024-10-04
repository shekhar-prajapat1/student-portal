import Link from 'next/link';
import styles from './Header.module.css';
import Head from 'next/head';

const Headerc = () => {
  return (
   
    <header className={styles.header}>
       <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet" />
    </Head>
      <div className={styles.logo}>
        <h2>DailiGo</h2>
      </div>
      <div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem2}>
              <Link href="/courses">
                Courses
              </Link>
            </li>
            <li className={styles.navItem1}>
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