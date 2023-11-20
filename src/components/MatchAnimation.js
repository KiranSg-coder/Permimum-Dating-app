import React, { useEffect, useState } from 'react';
import '../styles/MatchAnimation.css';

function MatchAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
     // Set animation visibility to true
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust the duration of the animation

    // Cleanup function to clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`matchAnimation ${isVisible ? 'show' : ''}`}>
      <h2> Match!</h2>
    </div>
  );
}

export default MatchAnimation;
