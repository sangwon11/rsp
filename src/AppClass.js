import React, { Component } from 'react'
import './App.css';
import BoxClass from './BoxClass';

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

export default class AppClass extends Component {

    constructor() {
        super();
        this.state={
            userSelet: null,
            computerSelect: null,
            result: '',
            computerResult: ''
        }
    }    

    play = (userChoice) => {
        let computerChoice =this.randomChoice();
        this.setState({
            userSelet: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice),
            computerResult: this.judgement(computerChoice, choice[userChoice])
        });
    };

    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random()*itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return 'tie'
          } else if (user.name === 'Rock') return computer.name === 'Scissors' ? 'win' : 'lose';
          else if (user.name === "Scissors") return computer.name === 'Paper' ? 'win' : 'lose';
          else if (user.name === "Paper") return computer.name === 'Rock' ? 'win' : 'lose';
    }

    render() {
        return (
            <div>
              <div className='main'>
                <BoxClass title='You' item={this.state.userSelet} result={this.state.result}/>
                <BoxClass title='Computer' item={this.state.userSelet} result={this.state.computerResult}/>
              </div>
              <div className='main'>
                <button onClick={() => this.play("scissors")}>가위</button>
                <button onClick={() => this.play("rock")}>바위</button>
                <button onClick={() => this.play("paper")}>보</button>
              </div>
            </div>
        )
    }
}
