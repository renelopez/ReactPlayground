
import React, { Component } from 'react';
import ResetGame from '../ResetGame';
import AcceptAnswer from '../AcceptAnswer';

import s from './ActionsSection.scss'

class ActionSectionComponent extends Component{


  onActionClick=(newState) =>{
    this.props.onActionClick(newState);
  };

  resetGame=()=>{
    this.props.onReset();
  };

  render(){
    return(
      <div className="actionsSection">
        <ResetGame onReset={this.resetGame}/>
        <AcceptAnswer actionState={this.props.actionState} onActionClick={this.onActionClick} />
      </div>
    );
  }
}

export default ActionSectionComponent;
