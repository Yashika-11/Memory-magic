import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import GameStats from './components/GameStats';
import GameDifficulty from './components/GameDifficulty';
import { generateCards, shuffleArray } from '../src/utils/gameUtils';

const DIFFICULTY_LEVELS = {
  easy: { rows: 4, cols: 4, pairs: 8 },
  medium: { rows: 6, cols: 6, pairs: 18 }
};

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const [scoreSaved, setScoreSaved] = useState(false);



  // Initialize game states
  const initializeGame = useCallback(() => {
    const config = DIFFICULTY_LEVELS[difficulty];
    const newCards = generateCards(config.pairs);
    setCards(newCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setTime(0);
    setIsGameStarted(false);
    setIsGameOver(false);
    setScoreSaved(false);
  }, [difficulty]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    let interval = null;
    if (isGameStarted && !isGameOver) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameStarted, isGameOver]);

 
  useEffect(() => {
    const config = DIFFICULTY_LEVELS[difficulty];
    if (matchedCards.length === config.pairs * 2 && !scoreSaved) {
      setIsGameOver(true);
      setIsGameStarted(false);
      setScoreSaved(true);
      
      // Update leaderboard
      const newScore = {
        difficulty,
        moves,
        time,
        date: new Date().toLocaleDateString(),
        timestamp: Date.now()
      };
      
      const savedLeaderboard = localStorage.getItem('memoryMatchLeaderboard');
      const currentLeaderboard = savedLeaderboard ? JSON.parse(savedLeaderboard) : [];
      
      const updatedLeaderboard = [...currentLeaderboard, newScore]
        .sort((a, b) => {
          if (a.moves !== b.moves) return a.moves - b.moves;
          return a.time - b.time;
        })
        .slice(0, 5);
      
      localStorage.setItem('memoryMatchLeaderboard', JSON.stringify(updatedLeaderboard));
    }
  }, [matchedCards, difficulty, moves, time, scoreSaved]);

  const handleCardClick = (cardId) => {
    if (isGameOver) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;
    
    if (!isGameStarted) {
      setIsGameStarted(true);
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      if (firstCard.value === secondCard.value) {
        // Match found - keep both cards visible
        setMatchedCards(prev => [...prev, firstId, secondId]);
        setFlippedCards([]); 
      } else {
        // No match, flip cards back after delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const handleReset = () => {
    initializeGame();
  };

  const handleNewGame = () => {
    setIsGameOver(false);
    initializeGame();
  };

  // Update cards with current state
  const updatedCards = cards.map(card => ({
    ...card,
    isFlipped: flippedCards.includes(card.id) || matchedCards.includes(card.id),
    isMatched: matchedCards.includes(card.id)
  }));

  const config = DIFFICULTY_LEVELS[difficulty];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Match Game</h1>
        <p>Flip cards to find matching pairs</p>
      </header>
      
      <main className="App-main">
       
        
      <GameStats moves={moves} time={time} />
      <GameDifficulty 
          difficulty={difficulty}
          onDifficultyChange={handleDifficultyChange}
          onReset={handleReset}
        />
      {isGameOver ? (
          <GameOver 
            moves={moves}
            time={time}
            difficulty={difficulty}
            onNewGame={handleNewGame}
          />
        ) : (
          <GameBoard 
            cards={updatedCards}
            onCardClick={handleCardClick}
            rows={config.rows}
            cols={config.cols}
          />
        )}
        
      </main>
    </div>
  );
}

export default App;
