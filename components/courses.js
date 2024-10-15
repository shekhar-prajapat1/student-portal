import styles from './courses.module.css'


const Courses = () => {
    return ( 
        <>
        <div className={styles.coursediv}>  
            <div className={styles.course}> 
                <h4 className={styles.name}>Machine Learning with Python
                </h4>
                <img src="ml.jpg" ></img>
                 <p className={styles.description}>
                 Learning machine learning is crucial as it empowers
                  you to make data-driven decisions and build intelligent systems that
                   can learn and adapt. The Machine Learning with Python course, tailored 
                   by subject experts, will guide you from fundamental concepts to advanced techniques in machine learning.
                    You will explore key topics such as supervised and unsupervised learning, data preprocessing, feature engineering
                    , and various algorithms like regression, classification, and clustering. The course also covers
                     model evaluation, deployment, and hands-on projects. </p> </div>
            <div className={styles.course}>
                <h4  className={styles.name}>
                Data Science:Basic to Advanced 
                </h4>
                <img src="ml.jpg"></img>
                <p className={styles.description}>
                Understanding data science is vital in today’s data-driven world, as it
                 enables you to extract insights and drive decision-making in various fields.
                  The Data Science: From Fundamentals to Advanced Applications course, designed by subject experts, 
                  will take you through essential concepts and advanced techniques in data science. You will cover
                   data collection, exploration, visualization, statistical analysis, and machine learning. 
                   The course also delves into cloud computing, big data technologies, and ethical considerations.  </p>
                 </div>
            {/* {/* <div className={styles.course}> 
            <h4  className={styles.name}> Ethical Hacking and Cybersecurity
            </h4>
            <img src="ml.jpg"></img>
                <p className={styles.description}>
                In an increasingly digital world, understanding ethical hacking and cybersecurity is crucial to protecting sensitive information and combating cyber threats. The Ethical Hacking and Cybersecurity course, crafted by subject experts, will take you from foundational concepts to advanced practices in ethical hacking. You will explore topics such as network security, reconnaissance techniques, vulnerability analysis, web application security, and incident response. The course also emphasizes legal and ethical considerations, along with hands-on experience using industry-standard tools. With referral links to informative articles and videos, quizzes for knowledge retention, and a capstone project to enhance your CV, personalized mentorship will guide you throughout the course, ensuring you remain focused, stress-free, and on track.
                </p>
            </div> */}
            <div className={styles.course}>
            <h4  className={styles.name}> Cloud Computing

            </h4>
            <img src="ml.jpg"></img>
            <p className={styles.description}>Learning cloud computing is essential for staying competitive in today's tech-driven landscape, as it enables businesses to innovate, reduce costs, and enhance scalability. The Cloud Computing course, designed by subject experts, will take you from fundamental concepts to advanced applications of cloud technologies. You’ll explore key topics such as cloud service and deployment models, virtualization, cloud platforms (AWS, Azure, Google Cloud), cloud security, storage, networking, and serverless computing. The course also includes practical knowledge on DevOps, cloud automation, and governance.</p>
                 </div> 

        </div>
        </>

    ); } 
    
export {Courses };