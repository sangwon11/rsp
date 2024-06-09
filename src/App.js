import {useState} from "react";
import './App.css';
import Box from './component/Box';

const choice = {
  rock:{
    name:"Rock",
    img:"https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cUWjC-0ITpEJkJ5FSd7kF-iKewZmRoAjcg&s"
  },
  paper:{
    name:"Paper",
    img:"https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/white-card/.jpg"
  }
}

function App() {

  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect,setComputerSelect] = useState(null)
  const [result,setResult] = useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user,computer) => {
    console.log("user", user, "computer", computer)

    if (user.name === computer.name) {
     return "tie"
    } else if (user.name === "Rock") 
      return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") 
      return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") 
      return computer.name === "Rock" ? "win" : "lose"
  }

  const randomChoice = () => {
    let  itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final]
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="computer" item={computerSelect} result={result}/>
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
