import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css'; // Import CSS for styling
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
       <link  rel="icon" href ="favicon.png"></link>
        <title>DailiGo: From Random Steps to Systemized Success</title>
      </Head>
      <h1 className={styles.title}>🎓 Welcome to Web DailiGo Platform! 🎓</h1>
      <p className={styles.subtitle}>
        Whether you're here to learn something new or enhance your skills, 
        we have everything you need to succeed in your studies!
      </p>
      <p className={styles.instruction}>
        ✨ <strong>First time here?</strong> Create an account to get started! ✨
      </p>
      <Link href="/register">
        <button className={styles.button}>Create Account</button>
      </Link>
      <p className={styles.instruction}>
        🔑 <strong>Already a user?</strong> Log in to continue your journey! 🔑
      </p>
      <Link href="/login">
        <button className={styles.button}>Login</button>
      </Link>
      <p className={styles.footer}>
        📈 Track your course completion percentage and access exclusive content 
        with your subscription!
      </p>
      <Footer/>
    </div>
  
  );
}
