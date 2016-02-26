
import React,{ Component } from 'react';
import s from './AvailableNumbersSection.scss'

import Number from '../Number';
import GameOver from '../GameOver';

class AvailableNumbersSectionComponent extends Component{

  static propTypes={
    isGameOver:React.PropTypes.number.isRequired,
    selectedNumbers:React.PropTypes.array.isRequired,
    onChooseNumber:React.PropTypes.func.isRequired
  };

  selectNumber=(data)=>{
    this.props.onChooseNumber(data);
  };

  chosenElement=()=>{
    alert('You cannot select an already used number..Please select other one')
  };

  onStartNewGame=()=>{
    this.props.onStartNewGame();
  };

  render(){



    var elementsToRender=[];
    var selectedNumbers=this.props.selectedNumbers;
    var usedNumbers=this.props.usedNumbers;
    var numberSize=this.props.numberSize;
    var isGameOver=this.props.isGameOver;
    var statusClass;

    if(isGameOver > 0){
      elementsToRender.push(<GameOver onStartNewGame={this.onStartNewGame} gameStatus={isGameOver}  />)
    }
    else {
      for (var i = 1; i <= numberSize; i++) {
        if (usedNumbers.indexOf(i) > -1) {
          elementsToRender.push(<Number statusClass="number chosen" onSelectNumber={this.chosenElement} number={i}
                                        key={i}/>)
          continue;
        }
        statusClass = 'number selected-' + (selectedNumbers.indexOf(i) >= 0);
        elementsToRender.push(<Number statusClass={statusClass} onSelectNumber={this.selectNumber} number={i} key={i}/>)
      }
    }



      return(
        <div className="availableSection well">
          {elementsToRender}
      </div>);
  }
}

export default AvailableNumbersSectionComponent;
