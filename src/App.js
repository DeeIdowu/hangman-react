import React from 'react';
import Header from './components/Header/Header';
import Figure from './components/Figure/Figure';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Hangman</h1>
      <Header/>
      <div className="game-container">
         <Figure/>
      </div>
    </div>
  );
}

export default App;
