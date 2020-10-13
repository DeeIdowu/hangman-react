import React, {useState} from 'react';
import Header from './components/Header/Header';
import Figure from './components/Figure/Figure';
import WrongLetters from './components/WrongLetters/WrongLetters';
import Word from './components/Word/Word';
import PopUp from './components/PopUp/PopUp';
import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];




function App() {
  //setting states:
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (

    <>
      <h1>Welcome to Hangman</h1>
      <Header/>
      <div className="game-container">
         <Figure/>
         <WrongLetters/>
         <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
    </>
  );
}

export default App;
