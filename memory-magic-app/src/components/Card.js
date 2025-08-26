import React from 'react';
import '../styles/Card.css';

const Card = ({ card, onClick }) => {
  const { isFlipped, isMatched, value } = card;
  
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onClick();
    }
  };

  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <span className="card-value">?</span>
        </div>
        <div className="card-back">
          <span className="card-value">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
