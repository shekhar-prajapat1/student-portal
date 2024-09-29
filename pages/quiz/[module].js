import { useState } from 'react';

export default function Quiz({ module }) {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate score based on answers
    console.log('Submitting answers', answers);
  };

  return (
    <div>
      <h1>Quiz for {module}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Question 1: What is ...?
          <input type="text" onChange={(e) => setAnswers({ ...answers, q1: e.target.value })} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Dynamic routing based on module
export async function getServerSideProps(context) {
  const { module } = context.params;
  return {
    props: { module },
  };
}
