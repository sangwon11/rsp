import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: "Rock",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozWB4H1jUY8uDzzBlDluQ1oi3qdGsaPtiGg&s'
  },
  scissors: {
    name: "Scissors",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-S9fVPSeA28SJexVubODPSkYPbaGlHh_Y2g&s'
  },
  paper: {
    name: "Paper",
    img: 'https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/white-card/.jpg'
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState();
  const [computerResult, setComputerResult] = useState();

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(judgement(computerChoice, choice[userChoice]));
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log('item array', itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log('random', randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  }

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie'
    } else if (user.name === 'Rock') return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === "Scissors") return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === "Paper") return computer.name === 'Rock' ? 'win' : 'lose';
  }

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={computerResult} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
