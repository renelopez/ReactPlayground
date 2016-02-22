
import React,{ Component } from 'react';
import s from './SelectedNumbersSection.scss';

import SelectedNumber from '../SelectedNumber'

class SelectedNumbersSectionComponent extends Component{

  undoNumber=(number)=>{
    this.props.onUndoNumber(number);
  };



  render(){
    var self=this;
    var numbersToRender=this.props.selectedNumbers.map(function(item,index){
        return <SelectedNumber number={item} key={index} onUndoNumber={self.undoNumber}/>
    });


    return(<div className="selectedSection well">
             {numbersToRender}
           </div>);
  }
}

export default SelectedNumbersSectionComponent;
