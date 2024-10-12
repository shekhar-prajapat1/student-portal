import { useRef } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null); // Create a reference to the video element

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video on mouse enter
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      
      videoRef.current.currentTime = 0; // Optional: Reset video to the start
    }
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',  // Full width
        maxWidth: '800px', // Max width for the video container
        overflow: 'hidden', // Hide overflow if needed
        position: 'relative', // Relative positioning for inner elements
      }}
    >
      <video 
        ref={videoRef} 
        muted 
        style={{
          width: '100%', // Make video responsive
          height: '80%', // Maintain aspect ratio
        }}
      >
        <source src="/Work Completed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
