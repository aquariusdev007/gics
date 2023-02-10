import React, { useState } from 'react';

function CardSlider({ cards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const prevCard = () => {
    if (currentCardIndex === 0) {
      setCurrentCardIndex(cards.length - 1);
    } else {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const nextCard = () => {
    if (currentCardIndex === cards.length - 1) {
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div>
      <button onClick={prevCard}>Previous Card</button>
      <div>
        {cards[currentCardIndex]}
      </div>
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
}

export default CardSlider;
