
import React,{ Component } from 'react';
import s from './GameOver.scss';

class GameOverComponent extends Component{


  static propTypes={
    gameStatus:React.PropTypes.number.isRequired,
    onStartNewGame:React.PropTypes.func.isRequired
  };

  startNewGame=()=>{
    this.props.onStartNewGame();
  };




  render(){

    var gameStatusText = this.props.gameStatus === 1 ? 'You win!' : 'You lose!';
    return(<div className="well">
           <h1>Game Over</h1>
            <h2>{gameStatusText}</h2>
              <button className="btn btn-success btn-raised" onClick={this.startNewGame}>Start New Game</button>
           </div>);
  }
}

export default GameOverComponent;
