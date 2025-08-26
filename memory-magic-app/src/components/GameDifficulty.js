import React from 'react';
import { getDifficultyName } from '../utils/gameUtils';
import '../styles/GameDifficulty.css';

const GameDifficulty = ({ difficulty, onDifficultyChange, onReset }) => {
  const difficulties = ['easy', 'medium'];

  return (
    <div className="game-controls">
      <div className="difficulty-selector">
        {difficulties.map((diff) => (
          <button
            key={diff}
            className={`difficulty-btn ${difficulty === diff ? 'active' : ''}`}
            onClick={() => onDifficultyChange(diff)}
          >
            {getDifficultyName(diff)}
          </button>
        ))}
      </div>
      
      <button className="reset-btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default GameDifficulty;
