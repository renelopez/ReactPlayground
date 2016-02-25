
import React, { Component } from 'react';
import ResetGame from '../ResetGame';
import AcceptAnswer from '../AcceptAnswer';
import Redraw from '../Redraw';

import s from './ActionsSection.scss'

class ActionSectionComponent extends Component{


  onActionClick=(newState) =>{
    this.props.onActionClick(newState);
  };

  redraw=()=>{
    this.props.onRedraw();
  };

  resetGame=()=>{
    this.props.onReset();
  };



  render(){
    return(
      <div className="actionsSection">
        <ResetGame onReset={this.resetGame}/>
        <Redraw onRedraw={this.redraw} redraws={this.props.redraws} />
        <AcceptAnswer actionState={this.props.actionState} onActionClick={this.onActionClick} isDisabled={this.props.isDisabled} />
      </div>
    );
  }
}

export default ActionSectionComponent;
