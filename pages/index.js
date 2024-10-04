
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
      <div className={styles.wrapper}>
        <div className={styles.progressBarContainer}>
        <div className={styles.bar1}>
        <h2>Students Appearing for JEE:</h2>
        <p id="appeared-students" className= {styles.countsize}>{appearedCount}</p>
        </div>
        <div className={styles.bar2}>
        <h2>Students Cleared Exam:</h2>
        <p id="cleared-students" className= {styles.countsize}>{clearedCount}</p>
        </div>

        </div>
        
        
        <div className={styles.progressBar}>
          <div id="progress" className={styles.progress} style={{ width: (clearedCount / 50000) * 100 + '%' }}></div>
        </div>
      </div>
      <div className= {styles.videocontainer}>
        <video  autoPlay
          muted loop >
          <source src="/homepage_video.mp4" type="video/mp4" />
        
        </video>
      </div> </div>
      
      <div className={styles.container2}>
        <div className={styles.registertext}>
        <h2>
    Begin your journey to success</h2>
    
        </div>
        <div className={styles.register}>
        <Link href="/register">
        <button className={styles.button}>Get Started</button>
      </Link>    
      
        </div>
        
        </div>
      
      
     
     
     
      
      <Footer/>
    </div>
  
  );
}
