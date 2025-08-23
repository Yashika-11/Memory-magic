import React from 'react';
import { formatTime, getDifficultyName } from '../utils/gameUtils';
import './GameOver.css';

const GameOver = ({ moves, time, difficulty, onNewGame }) => {
  const isNewRecord = false; // We'll check this in the Leaderboard component

  return (
    <div className="game-over">
      <div className="game-over-content">
        <h2>🎉 Game Over! 🎉</h2>
        
        <div className="final-score">
          <h3>Final Score</h3>
          <div className="score-details">
            <div className="score-item">
              <span className="score-label">Difficulty:</span>
              <span className="score-value">{getDifficultyName(difficulty)}</span>
            </div>
            <div className="score-item">
              <span className="score-label">Moves:</span>
              <span className="score-value">{moves}</span>
            </div>
            <div className="score-item">
              <span className="score-label">Time:</span>
              <span className="score-value">{formatTime(time)}</span>
            </div>
          </div>
          
          {isNewRecord && (
            <div className="new-record">
              🏆 New Best Score! 🏆
            </div>
          )}
        </div>

        <div className="game-completion-message">
          <p>🎉 Congratulations! You've completed the game!</p>
          <p>Your score has been saved!</p>
        </div>

        <button className="new-game-btn" onClick={onNewGame}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
