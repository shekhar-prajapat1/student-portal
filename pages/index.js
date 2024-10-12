
import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css'; // Import CSS for styling
import Footer from '../components/Footer';
import { Headerc } from '../components/Headerc';
import { useState, useEffect } from 'react';
import TypingEffect from '../components/TypingEffect';
import Slider from '../components/Slider';
import VideoComponent from '../components/Videocomponent';


export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
       <link  rel="icon" href ="favicon.png"></link>
        <title>DailiGo: Randomization to Systemization</title>
      </Head>
      <Headerc></Headerc>
      
      <div className={styles.container1}>
      <div className={styles.wrapper}>
      
      <TypingEffect text="Unlock Your Potential with DailiGo!" speed={300}  />
        
       
      </div>
      <div className= {styles.videocontainer}>
      
      </div> </div>
      
      {/* <div className={styles.container2}>
      <h3> Begin your journey to success</h3>

        <div className={styles.innerdiv}>
        <div className={styles.registertext}>
        </div>
        <div className={styles.registerbutton}>
        <Link href="/register">
        <button className={styles.button}>Get Started</button>
      </Link>    
      
        </div></div>
        </div> */}




        <div className={styles.container3}>
        <h3 >Track your Success</h3>

         <div className={styles.innerdiv}>
         <div className={styles.paratext}>
          
          <p>
          Track your progress with a tracker designed for you, and reach out for a mentorship call to get personalized advice
          </p>

         </div>
         <div className= {styles.track}>
           <video   autoPlay loop muted className={styles.video}>
            <source  src="/month.mp4" type="video/mp4"/>
           </video>
         </div>

         </div>
         
        </div>

        <div className={styles.container4}>
        <h3>Pick the Right Capstone Project</h3>
        <div className={styles.innerdiv}>
        <div className={styles.paratext}>
           
           <p >Your capstone project enhances your skills and strengthens your resume, providing mentorship from specialized trainers to help turn your ideas into success</p>
         </div>
         <div className={styles.slider}>
          <Slider/>
         </div>

        </div>
        

        </div>

        <div className={styles.container5}>
        <h3 >Finish What You Started!</h3>
         
         <div className={styles.innerdiv}>
         <div className={styles.paratext}>
         <p>Don't let procrastination hinder your progress
         . Take control and complete your tasks today for a brighter and more successful tomorrow.
          </p>

     </div>
     <div  className= {styles.video2}>
     <VideoComponent/>

     </div>

         </div>
        
          
          </div>
      
      
     
     
     
      
      <Footer/>
    </div>
  
  );
}
