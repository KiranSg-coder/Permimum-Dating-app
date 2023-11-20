import React, { useEffect, useState } from 'react';
import '../styles/MatchAnimation.css';

function MatchAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust the duration of the animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`matchAnimation ${isVisible ? 'show' : ''}`}>
      <h2> Match!</h2>
      {/* Add animation elements or effects */}
    </div>
  );
}

export default MatchAnimation;
