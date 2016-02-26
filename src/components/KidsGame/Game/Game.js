import React,{ Component } from 'react';

import StarsSection from '../StarsSection';
import ActionsSection from '../ActionsSection';
import SelectedNumbersSection from '../SelectedNumbersSection';
import AvailableNumbersSection from '../AvailableNumbersSection';

class GameComponent extends Component {

  static defaultProps = {
    numberSize: 9
  };


  state = {
    actionState: 0,
    isGameOver: 0,
    stars: this.getRandomStarsNumber(),
    selectedNumbers: [],
    usedNumbers: [],
    redraws: 5
  };

  checkGameOver = ()=> {
    if (this.state.usedNumbers.length === this.props.numberSize) {
      this.setState({isGameOver: 1})
    }
    if (this.state.redraws === 0 && !this.possibleSolutions()) {
      this.setState({isGameOver: 2})
    }
  };

  possibleSolutions = ()=> {
    var numberOfStars = this.state.stars,
      possibleNumbers = [],
      usedNumbers = this.state.usedNumbers;

    for (var i = 0; i < this.props.numberSize; i++) {
      if (usedNumbers.indexOf(i) < 0) {
        possibleNumbers.push(i);
      }
    }

    return this.possibleCombinationSum(possibleNumbers, numberOfStars);
  };

  possibleCombinationSum = (arr, n) => {
    if (arr.indexOf(n) >= 0) {
      return true;
    }
    if (arr[0] > n) {
      return false;
    }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return this.possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount; i++) {
      var combinationSum = 0;
      for (var j = 0; j < listSize; j++) {
        if (i & (1 << j)) {
          combinationSum += arr[j];
        }
      }
      if (n === combinationSum) {
        return true;
      }
    }
    return false;
  };


  chooseNumber = (number) => {
    if (this.state.selectedNumbers.indexOf(number) < 0) {
      this.setState({selectedNumbers: this.state.selectedNumbers.concat(number)})
    }
  };

  isDisabled = ()=> {
    return this.state.selectedNumbers.length === 0;
  };

  getRandomStarsNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }


  onActionClick = (newState)=> {
    switch (newState) {
      case 1:
        var selectedNumbersSum = this.state.selectedNumbers.reduce((accum, item)=> accum + item, 0);
        if (selectedNumbersSum === this.state.stars) {
          this.setState({actionState: newState});
        } else {
          this.setState({actionState: 2})
        }
        break;
      case 2:
        var updatedUsedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
          usedNumbers: updatedUsedNumbers,
          stars: this.getRandomStarsNumber(),
          selectedNumbers: [],
          actionState: 0
        },()=>{
          this.checkGameOver()
        });
        break;

    }
  };

  onStartNewGame = ()=> {
    this.resetGame();
  };

  redraw = ()=> {
    if (this.state.redraws > 0) {
      this.setState({stars: this.getRandomStarsNumber(), redraws: this.state.redraws - 1},()=>{
        this.checkGameOver()
      });
    }
  };

  resetGame = ()=> {
    this.setState({
      stars: this.getRandomStarsNumber(),
      selectedNumbers: [],
      actionState: 0,
      usedNumbers: [],
      isGameOver: 0,
      redraws: 5
    })
  };

  undoNumber = (number)=> {
    var selectedNumbers = this.state.selectedNumbers,
      indexOfNumber = selectedNumbers.indexOf(number);

    selectedNumbers.splice(indexOfNumber, 1);
    this.setState({selectedNumbers: selectedNumbers, actionState: 0});
  };

  render() {
    var isDisabled = this.isDisabled();

    return (<div className="container">
      <StarsSection stars={this.state.stars}/>
      <ActionsSection onReset={this.resetGame}
                      actionState={this.state.actionState}
                      onActionClick={this.onActionClick}
                      onRedraw={this.redraw}
                      redraws={this.state.redraws}
                      isDisabled={isDisabled}/>
      <SelectedNumbersSection selectedNumbers={this.state.selectedNumbers}
                              onUndoNumber={this.undoNumber}/>
      <AvailableNumbersSection numberSize={this.props.numberSize}
                               selectedNumbers={this.state.selectedNumbers}
                               usedNumbers={this.state.usedNumbers}
                               onChooseNumber={this.chooseNumber}
                               onStartNewGame={this.onStartNewGame}
                               isGameOver={this.state.isGameOver}/>
    </div>)
  }
}

export default GameComponent;
