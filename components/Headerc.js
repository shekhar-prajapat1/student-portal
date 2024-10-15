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
     
      <div className={styles.navItem}>
        <Link href="/login">
          <button className={styles.button}>Login</button>
        </Link>
      </div>
    </header>
  );
};

export { Headerc };