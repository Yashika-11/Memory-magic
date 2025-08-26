import React from 'react';
import Card from './Card';
import '../styles/GameBoard.css';

const GameBoard = ({ cards, onCardClick, rows, cols }) => {
  return (
    <div className="game-board">
      <div 
        className="game-grid"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => onCardClick(card.id)}
          />
        ))}
      </div>
      
    
    </div>
  );
};

export default GameBoard;
