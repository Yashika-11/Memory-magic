import React from 'react';
import './App.css';
import MemoryMagic from './components/MemoryMagic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Match Game</h1>
        <p>Flip cards to find matching pairs</p>
      </header>
      <main className="App-main">
        <MemoryMagic />
      </main>
    </div>
  );
}

export default App;
