const ProgressTracker = ({ completion }) => {
    return (
      <div>
        <h2>Course Completion: {completion}%</h2>
        <progress value={completion} max="100"></progress>
      </div>
    );
  };
  
  export default ProgressTracker;
  