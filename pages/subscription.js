import Head from 'next/head';
import Link from 'next/link';
import styles from './Subscription.module.css'; // Import CSS for styling

const courses = [
  {
    title: 'Complete JEE Preparation',
    description: 'In-depth coverage of all JEE subjects with practice questions.',
    price: '$50/month',
  },
  {
    title: 'JEE Physics Masterclass',
    description: 'Specialized courses focusing on JEE Physics concepts and problem-solving.',
    price: '$30/month',
  },
  {
    title: 'JEE Chemistry Essentials',
    description: 'Comprehensive chemistry modules for JEE aspirants.',
    price: '$30/month',
  },
  {
    title: 'Mathematics for JEE',
    description: 'Intensive training on JEE Mathematics with quizzes and assignments.',
    price: '$30/month',
  },
];

export default function Subscription() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Subscription Plans</title>
      </Head>
      <h1 className={styles.title}>📚 Subscription Plans for JEE Courses</h1>
      <div className={styles.courses}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p className={styles.price}>{course.price}</p>
            <Link href="/checkout">
              <button className={styles.button}>Subscribe Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
