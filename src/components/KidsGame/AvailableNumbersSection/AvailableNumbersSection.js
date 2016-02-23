
import React,{ Component } from 'react';
import s from './AvailableNumbersSection.scss'

import Number from '../Number';

class AvailableNumbersSectionComponent extends Component{

  static propTypes={
    selectedNumbers:React.PropTypes.array.isRequired,
    onChooseNumber:React.PropTypes.func.isRequired
  };

  selectNumber=(data)=>{
    this.props.onChooseNumber(data);
  };

  chosenElement=()=>{
    alert('You cannot select an already used number..Please select other one')
  };

  render(){



    var numbersToRender=[];
    var selectedNumbers=this.props.selectedNumbers;
    var usedNumbers=this.props.usedNumbers;
    var numberSize=this.props.numberSize;
    var statusClass;


    for(var i= 1;i<=numberSize;i++){
      if(usedNumbers.indexOf(i) > -1){
        numbersToRender.push(<Number statusClass="number chosen" onSelectNumber={this.chosenElement} number={i} key={i}/>)
        continue;
      }
      statusClass='number selected-'+ (selectedNumbers.indexOf(i)>=0);
      numbersToRender.push(<Number statusClass={statusClass} onSelectNumber={this.selectNumber} number={i} key={i}/>)
    }



      return(
        <div className="availableSection well">
          {numbersToRender}
      </div>);
  }
}

export default AvailableNumbersSectionComponent;
