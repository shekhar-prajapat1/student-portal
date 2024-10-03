
import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css'; // Import CSS for styling
import Footer from '../components/Footer';
import { Headerc } from '../components/Headerc';
import { useState, useEffect } from 'react';


export default function Home() {
  const [appearedCount, setAppearedCount] = useState(0);
  const [clearedCount, setClearedCount] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      if (appearedCount < 1415000) {
        setAppearedCount(appearedCount + 28302);
      }

       if (clearedCount < 48248) {
        setClearedCount(clearedCount + 964);
      }
    };

    const intervalId = setInterval(animateNumbers, 10);

    return () => clearInterval(intervalId);
  }, [appearedCount, clearedCount]);

  return (
    <div className={styles.container}>
      <Head>
       <link  rel="icon" href ="favicon.png"></link>
        <title>DailiGo: Randomization to Systemization</title>
      </Head>
      <Headerc></Headerc>
      
      <div className={styles.container1}>
      <div className={styles.progressBarContainer}>
        <h2>Students Appearing for JEE:</h2>
        <p id="appeared-students" className= {styles.countsize}>{appearedCount}</p>
        <h2>Students Cleared Exam:</h2>
        <p id="cleared-students" className= {styles.countsize}>{clearedCount}</p>
        <div className={styles.progressBar}>
          <div id="progress" className={styles.progress} style={{ width: (clearedCount / 50000) * 100 + '%' }}></div>
        </div>
      </div>
      <div>
        <p>add content </p>
      </div>
      </div>
      <br></br>
      <div className={styles.container2}>
        <div className={styles.info1}>
        <h2>
      New here? Register now and start your journey!</h2>
      <p>
      We’re dedicated to guiding JEE aspirants toward their goals with a structured, organized approach. Let us turn your confusion into a clear, step-by-step plan for exam success. Join us today and unlock your true potential!
      </p>
      <Link href="/register">
        <button className={styles.button}>Register</button>
      </Link>    

        </div>
        <div className={styles.info2}>

        </div>
      
        </div>
      
      
     
     
     
      
      <Footer/>
    </div>
  
  );
}
