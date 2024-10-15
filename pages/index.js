
import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css'; // Import CSS for styling
import Footer from '../components/Footer';
import { Headerc } from '../components/Headerc';
import { useState, useEffect } from 'react';
import { Courses } from '../components/courses';



export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
       <link  rel="icon" href ="favicon.png"></link>
        <title>DailiGo: Randomization to Systemization</title>
      </Head>
      <Headerc></Headerc>
      
      <div className={styles.container1}>
      <h1>Unlock your potential with DailiGo</h1>
      <Courses/>
      
      </div>
      
      




        <div className={styles.container3}>
        <h1 >Track your Success</h1>

         <div className={styles.innerdiv}>
         
         

         </div>
         
        </div>

        <div className={styles.container4}>
        <h1>Select the Ideal Project</h1>
           <h3>with Key Technologies to Strengthen Your Resume</h3>
           <div className={styles.technology}>
            <div className={styles.row}>
              <div className={styles.e1}><img src= "Vite.js.png" id="i1"></img><p>Vite</p></div>
              <div className={styles.e1}><img src= "MongoDB.png" id="i2"></img><p>Mongodb</p></div>
              <div className={styles.e1}><img src= "AngularJS.png" id="i3"></img><p>Angular</p></div>
             
            </div>
            

           </div>
        </div>
        <br>
        </br>
        <br>
        </br>

        <div className={styles.container5}>
        <h1 >Finish What You Started!</h1>
         
         <div className={styles.innerdiv}>
        
      <p>course completion tracker</p>

         </div>
        
          
          </div>
      
      
     
     
     
      
      <Footer/>
    </div>
  
  );
}
