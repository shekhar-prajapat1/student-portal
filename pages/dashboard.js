import { useEffect, useState } from 'react';
import ProgressTracker from '../components/ProgressTracker';
import Link from 'next/link';

export default function Dashboard() {
  const [courseCompletion, setCourseCompletion] = useState(0);

  useEffect(() => {
    // Logic to fetch course completion percentage
    setCourseCompletion(75); // Example completion percentage
  }, []);

  return (
    <div>
      <h1>Your Dashboard</h1>
      <ProgressTracker completion={courseCompletion} />
      <Link href="/quiz/module1">Start Quiz for Module 1</Link>
    </div>
  );
}
