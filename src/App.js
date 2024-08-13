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

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  }
  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} />
        {/* <Box title='Computer' /> */}
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
