import React from 'react';
import Header from './components/Header/Header';
import Figure from './components/Figure/Figure';
import WrongLetters from './components/WrongLetters/WrongLetters';

import './App.css';

function App() {
  return (
    <>
      <h1>Welcome to Hangman</h1>
      <Header/>
      <div className="game-container">
         <Figure/>
         <WrongLetters/>
      </div>
    </>
  );
}

export default App;
