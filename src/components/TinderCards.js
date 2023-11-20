// Components/TinderCards.js
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../firebase';
import MatchAnimation from './MatchAnimation';
import '../styles/TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);
  const [swipeCount, setSwipeCount] = useState(0);
  const [showMatchAnimation, setShowMatchAnimation] = useState(false);

  useEffect(() => {
    // Subscribe to the 'people' collection in Firebase
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

      // Cleanup function to unsubscribe when the component unmounts
    return () => { 
      unsubscribe();
    };
  }, []);

  const handleSwipe = (direction) => {
    // Update swipe count and check for a match every 2 swipes
    setSwipeCount((prevCount) => prevCount + 1);
    if (swipeCount % 2 === 0 && swipeCount > 0) {
      setShowMatchAnimation(true);
    }
  };

  const handleMatchAnimationComplete = () => {
    // Reset swipe count and hide match animation
    setSwipeCount(0);
    setShowMatchAnimation(false);
  };

  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => handleSwipe(dir)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <div className="cardOverlay">
                            <h3>{person.name}, {person.age}</h3>
                            <p> {person.location}</p>
                        </div>
            </div>
          </TinderCard>
        ))}
      </div>
      {showMatchAnimation && (
        <MatchAnimation onComplete={handleMatchAnimationComplete} />
      )}
    </div>
  );
}

export default TinderCards;
