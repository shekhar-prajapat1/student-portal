import styles from './courses.module.css';
import { useState } from 'react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weights: ['200', '400', '600', '800'],
  display: 'swap',
});

const CourseItem = ({ title, image, description, visible, onMouseEnter }) => (
  <div className={styles.course} onMouseEnter={onMouseEnter}>
    <h4 className={styles.name}>{title}</h4>
    <div className={styles.innerdiv} style={{ display: visible ? 'none' : 'block' }}>
      <img src={image} alt={title} />
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

const Courses = () => {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [visible3, setVisible3] = useState(true);

  return (
    <div className={nunito.className}>
      <div className={styles.coursediv1}>
        <CourseItem
          title="Machine Learning with Python"
          image="ml.jpg"
          description="Learning machine learning is crucial as it empowers you to make data-driven decisions and build intelligent systems that can learn and adapt. The Machine Learning with Python course, tailored by subject experts, will guide you from fundamental concepts to advanced techniques in machine learning..."
          visible={visible1}
          onMouseEnter={() => setVisible1(false)}
        />
        <CourseItem
          title="Data Science: Basic to Advanced"
          image="ml.jpg"
          description="Understanding data science is vital in today’s data-driven world, as it enables you to extract insights and drive decision-making in various fields. The Data Science course, designed by subject experts, will take you through essential concepts and advanced techniques..."
          visible={visible1}
          onMouseEnter={() => setVisible1(false)}
        />
        <CourseItem
          title="Cloud Computing"
          image="ml.jpg"
          description="Learning cloud computing is essential for staying competitive in today's tech-driven landscape, as it enables businesses to innovate, reduce costs, and enhance scalability. This course will take you from fundamental concepts to advanced applications of cloud technologies..."
          visible={visible1}
          onMouseEnter={() => setVisible1(false)}
        />
      </div>

      <div className={styles.coursediv2}>
        <CourseItem
          title="Ethical Hacking and Cybersecurity"
          image="ml.jpg"
          description="In an increasingly digital world, understanding ethical hacking and cybersecurity is crucial to protecting sensitive information and combating cyber threats. This course will take you from foundational concepts to advanced practices in ethical hacking..."
          visible={visible2}
          onMouseEnter={() => setVisible2(false)}
        />
        <CourseItem
          title="Full Stack Development with MERN"
          image="ml.jpg"
          description="Mastering full stack development is essential as it equips you with the skills to build dynamic, user-friendly web applications. This course will take you from foundational concepts to advanced practices in web development using MongoDB, Express.js, React.js, and Node.js..."
          visible={visible2}
          onMouseEnter={() => setVisible2(false)}
        />
        <CourseItem
          title="Android Development"
          image="ml.jpg"
          description="Learning Android Development equips you with the skills to create innovative mobile applications. This course will guide you from the fundamentals to advanced topics in app creation..."
          visible={visible2}
          onMouseEnter={() => setVisible2(false)}
        />
      </div>

      <div className={styles.coursediv3}>
        <CourseItem
          title="Algorithmic Trading"
          image="ml.jpg"
          description="Understanding Algorithmic Trading is essential for anyone looking to gain a competitive edge in the financial markets. This course covers market mechanics, trading strategies, risk management, and performance eval
