import React from 'react';
import { formatTime } from '../utils/gameUtils';
import './GameStats.css';

const GameStats = ({ moves, time }) => {
  return (
    <div className="game-stats">
      <div className="stat-item">
        <div className="stat-label">MOVES</div>
        <div className="stat-value moves">{moves}</div>
      </div>
      <div className="stat-item">
        <div className="stat-label">TIME</div>
        <div className="stat-value time">{formatTime(time)}</div>
      </div>
    </div>
  );
};

export default GameStats;
