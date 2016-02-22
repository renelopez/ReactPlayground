import React,{ Component } from 'react';

import StarsSection from '../StarsSection';
import ActionsSection from '../ActionsSection';
import SelectedNumbersSection from '../SelectedNumbersSection';
import AvailableNumbersSection from '../AvailableNumbersSection';

class GameComponent extends Component {

  static defaultProps={
    numberSize:9
  };


  state = {
    actionState:0,
    stars: this.getRandomStarsNumber(),
    selectedNumbers:[],
    usedNumbers:[4,7]
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

  onActionClick=(newState)=>{
    switch (newState){
      case 1:
            var selectedNumbersSum=this.state.selectedNumbers.reduce((accum,item)=> accum + item,0);
            if(selectedNumbersSum === this.state.stars){
              this.setState({actionState:newState});
            }else{
              this.setState({actionState:2})
            }
    }

  };

  undoNumber=(number)=>{
   var selectedNumbers=this.state.selectedNumbers,
       indexOfNumber=selectedNumbers.indexOf(number);

    selectedNumbers.splice(indexOfNumber,1);
    this.setState({selectedNumbers:selectedNumbers,actionState:0});
  };

  render() {
    return (<div className="container">
      <StarsSection stars={this.state.stars}/>
      <ActionsSection onReset={this.resetGame} actionState={this.state.actionState}
                      onActionClick={this.onActionClick} />
      <SelectedNumbersSection selectedNumbers={this.state.selectedNumbers}
                              onUndoNumber={this.undoNumber} />
      <AvailableNumbersSection numberSize={this.props.numberSize}
                               selectedNumbers={this.state.selectedNumbers}
                               usedNumbers={this.state.usedNumbers}
                               onChooseNumber={this.chooseNumber}/>
    </div>)
  }
}

export default GameComponent;
