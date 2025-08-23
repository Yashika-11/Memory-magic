import React from 'react';
import Card from './Card';
import './GameBoard.css';

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
      
      <div className="game-info">
        <div className="game-states">
          <h4>Game States:</h4>
          <div className="state-examples">
            <div className="state-example">
              <div className="card-example face-down">?</div>
              <span>Face-down card</span>
            </div>
            <div className="state-example">
              <div className="card-example flipped">🍎</div>
              <span>Currently flipped (no match)</span>
            </div>
            <div className="state-example">
              <div className="card-example matched">🍎</div>
              <span>Matched pair (stays visible)</span>
            </div>
          </div>
        </div>
        
        <div className="card-content-info">
          <h4>Card Content Options (choose any):</h4>
          <div className="content-examples">
            <div>
              <strong>Images/Emojis:</strong> 🍎 🍌 🍊 🍇 🐷 🐶
            </div>
            <div>
              <strong>Symbols:</strong> ⭐ ❤️ ♦️ ♣️ ♠️ 🔴
            </div>
            <div>
              <strong>Color Blocks:</strong> 
              <span className="color-block red"></span>
              <span className="color-block green"></span>
              <span className="color-block blue"></span>
              <span className="color-block orange"></span>
              <span className="color-block purple"></span>
              <span className="color-block brown"></span>
            </div>
            {/* <div><em>etc.</em></div> */}
            {/* <div><small>Choose one approach for your implementation.</small></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
