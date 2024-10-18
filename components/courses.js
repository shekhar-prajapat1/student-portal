import styles from './courses.module.css';
import { useState } from 'react';

import { Nunito} from 'next/font/google';

const nunito = Nunito({
    subsets: ['latin'],
    weights: ['200', '400', '600', '800'],
    display: 'swap',
  });

const Courses = () => {
    const [visible1 , setvisible1] = useState(true) ; 
    function dovisible1 () {
setvisible1(false)

    }
   

    const [visible2 , setvisible2] = useState(true) ; 
    function dovisible2 () {
setvisible2(false)

    }
   
    const [visible3 , setvisible3] = useState(true) ; 
    function dovisible3 () {
setvisible3(false)

    }
   
    return ( 

      
        <div className={nunito.className}>
    
        
        <div className= {styles.coursediv1} onMouseEnter={dovisible1} 
        >  
            <div className={styles.course} > 
                
                <h4 className={styles.name}>Machine Learning with Python
                </h4>
                
              

                <div  className={styles.innerdiv}  style={{ display: visible1 ? 'none' : 'block' }} >

                <img src="ml.jpg" ></img>
                 <p className={styles.description} >
                 Learning machine learning is crucial as it empowers
                  you to make data-driven decisions and build intelligent systems that
                   can learn and adapt. The Machine Learning with Python course, tailored 
                   by subject experts, will guide you from fundamental concepts to advanced techniques in machine learning.
                    You will explore key topics such as supervised and unsupervised learning, data preprocessing, feature engineering
                    , and various algorithms like regression, classification, and clustering. The course also covers
                     model evaluation, deployment, and hands-on projects. </p>

                </div>
                </div>
            <div className={styles.course}  >
                <h4  className={styles.name}>
                Data Science:Basic to Advanced 
                </h4>

                <div className={styles.innerdiv} style={{ display: visible1 ? 'none' : 'block' }}>
                <img src="ml.jpg"></img>
                <p className={styles.description}>
                Understanding data science is vital in today’s data-driven world, as it
                 enables you to extract insights and drive decision-making in various fields.
                  The Data Science: From Fundamentals to Advanced Applications course, designed by subject experts, 
                  will take you through essential concepts and advanced techniques in data science. You will cover
                   data collection, exploration, visualization, statistical analysis, and machine learning. 
                   The course also delves into cloud computing, big data technologies, and ethical considerations.  </p> </div>
                 </div>
          
            <div className={styles.course}  >
            <h4  className={styles.name}> Cloud Computing

            </h4>

            <div className={styles.innerdiv} style={{ display: visible1 ? 'none' : 'block' }} >
            <img src="ml.jpg"></img>
            <p className={styles.description}>Learning cloud computing is essential for staying competitive in today's tech-driven landscape, as it enables businesses to innovate, reduce costs, and enhance scalability.It is designed by subject experts, will take you from fundamental concepts to advanced applications of cloud technologies. You’ll explore key topics such as cloud service and deployment models, virtualization, cloud platforms (AWS, Azure, Google Cloud), cloud security, storage, networking, and serverless computing. The course also includes practical knowledge on DevOps, cloud automation, and governance.</p>
                 </div>  </div>
 </div > 






<div className= {styles.coursediv2} onMouseEnter={dovisible2}
>
   <div className={styles.course}>
   <h4 className={styles.name}>Ethical Hacking and Cybersecurity
 </h4>
 <div  className={styles.innerdiv} style={{ display: visible2 ? 'none' : 'block' }}  > 
 <img src="ml.jpg" ></img>
 <p className={styles.description}> In an increasingly digital world, understanding ethical hacking and cybersecurity is crucial to protecting sensitive information and combating cyber threats. The Ethical Hacking and Cybersecurity course, crafted by subject experts, will take you from foundational concepts to advanced practices in ethical hacking. You will explore topics such as network security, reconnaissance techniques, vulnerability analysis, web application security, and incident response. The course also emphasizes legal and ethical considerations, along with hands-on experience using industry-standard tools.</p>
 </div>
   </div>


   <div className={styles.course}>
   <h4 className={styles.name}>Full Stack Development with MERN
   </h4>
   <div  className={styles.innerdiv} style={{ display: visible2 ? 'none' : 'block' }}  >
   <img src="ml.jpg" ></img>
   <p className={styles.description}>In today’s technology landscape, mastering full stack development is essential as it equips you with the skills to build dynamic, user-friendly web applications. The Full Stack Development with MERN course, tailored by subject experts, will take you from foundational concepts to advanced practices in web development. You will learn how to create robust applications using MongoDB, Express.js, React.js, and Node.js. The course covers key topics such as RESTful APIs, database management, state management in React, authentication, and deployment strategies. </p> </div>
   </div> 



   <div className={styles.course}>
   <h4 className={styles.name}>Android Development
</h4>
<div  className={styles.innerdiv} style={{ display: visible2 ? 'none' : 'block' }}  > 
<img src="ml.jpg" ></img>
<p className={styles.description}>Learning Android Development equips you with the skills to create innovative mobile applications that are in high demand in today’s tech-driven world. The Android Development course, tailored by subject experts, guides you from the fundamentals to advanced topics in app creation. You'll cover essential areas like user interfaces, data storage, networking, background services, and Android Jetpack components. You'll also learn about location services, notifications, and how to publish your app on the Google Play Store. </p>
</div>
    </div>        
            
            
            </div>

            <div className= {styles.coursediv3} onMouseEnter={dovisible3}
           >
            <div className={styles.course}>
            
            <h4 className={styles.name}>Algorithmic Trading</h4>
           
            
            <div  className={styles.innerdiv} style={{ display: visible3 ? 'none' : 'block' }}  >
            <img src="ml.jpg" ></img>  
            <p className={styles.description}>Understanding Algorithmic Trading is essential for anyone looking to gain a competitive edge in the financial markets. This Algorithmic Trading course, designed by subject experts, takes you from fundamental concepts to advanced strategies for creating and implementing trading algorithms. You'll explore key topics such as market mechanics, trading strategies, risk management, and performance evaluation. The course covers programming for trading (using Python), data analysis, and backtesting your algorithms to ensure effectiveness.</p> 
            </div>
            </div>

            </div>
        </div>

    ); } 
    
export {Courses };

//className={styles.innerdiv} style={{ display: visible ? 'none' : 'block' }}