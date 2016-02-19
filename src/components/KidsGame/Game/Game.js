import React from 'react';

import StarsSection from '../StarsSection'
import SelectedNumbersSection from '../SelectedNumbersSection'
import AvailableNumbersSection from '../AvailableNumbersSection'
import ResetGame from '../ResetGame'

class GameComponent extends React.Component {

  static defaultProps={
    numberSize:9
  };


  state = {
    stars: this.getRandomStarsNumber(),
    selectedNumbers:[]
  };

  getRandomStarsNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }

  resetGame = ()=> {
    this.setState({stars: this.getRandomStarsNumber(),selectedNumbers:[]})
  };

  chooseNumber = (number) =>{
      if(this.state.selectedNumbers.indexOf(number) < 0){
        this.setState({selectedNumbers:this.state.selectedNumbers.concat(number)})
      }
  };

  render() {
    return (<div className="container">
      <StarsSection stars={this.state.stars}/>
      <ResetGame onReset={this.resetGame}/>
      <SelectedNumbersSection />
      <AvailableNumbersSection numberSize={this.props.numberSize} selectedNumbers={this.state.selectedNumbers} onChooseNumber={this.chooseNumber}/>
    </div>)
  }
}

export default GameComponent;
