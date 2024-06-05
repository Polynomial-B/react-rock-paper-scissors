import './App.css'
import React from 'react'

function App() {
const [playerChoice, setPlayerChoice] = React.useState(null)
const [computerChoice, setComputerChoice] = React.useState(null)


function handleClick(e) {
  setPlayerChoice(e.target.innerText);
  randomChoice();
}

console.log(`Player choice is ${playerChoice}`);
console.log(getResult());

function randomChoice() {
  const choice = (Math.floor(Math.random()*3)+1)
  if (choice === 1) {
    setComputerChoice("Rock")
  } else if (choice === 2) {
    setComputerChoice("Paper")
  } else {
    setComputerChoice("Scissors")
  }
}

function handleReset() {
  setComputerChoice(null)
  setPlayerChoice(null)
}

console.log(`Computer choice is ${computerChoice}`);

function getResult() {
  if( playerChoice === null) {
    return "Select to begin a game"
  } else if(playerChoice === computerChoice) {
    return "You have drawn!"
   } else if (
    (playerChoice === "Rock" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Rock")) {
    return `You have lost! You chose ${playerChoice} but the computer chose ${computerChoice}!`
   } else {
    return "You have won! Congratulations! 🪩"
   }
}

  return (
    <div className="game">
      <p>Player 1 chose: <span>{playerChoice}</span></p>
      <p>Computer chose: <span>{computerChoice}</span></p>
      <p className="result">{getResult()}</p>
      <button onClick={handleClick}>Rock</button>
      <button onClick={handleClick}>Paper</button>
      <button onClick={handleClick}>Scissors</button>
      <button id="reset" onClick={handleReset}>reset</button>
    </div>
  )
}

export default App