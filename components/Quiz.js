import { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleAnswerChange = (e) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  if (score !== null) {
    return (
      <div>
        <h1>Your Score: {score}/{questions.length}</h1>
        <button onClick={() => setScore(null)}>Retake Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
      <p>{questions[currentQuestionIndex].question}</p>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="quiz"
            value={option}
            onChange={handleAnswerChange}
            checked={userAnswers[currentQuestionIndex] === option}
          />
          {option}
        </label>
      ))}
      <button onClick={handleNextQuestion}>
        {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Submit Quiz'}
      </button>
    </div>
  );
};

export default Quiz;
