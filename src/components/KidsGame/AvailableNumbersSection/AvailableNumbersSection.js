
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


  render(){



    var numbersToRender=[];
    var selectedNumbers=this.props.selectedNumbers;
    var usedNumbers=this.props.usedNumbers;
    var numberSize=this.props.numberSize;
    var statusClass;


    for(var i= 1;i<=numberSize;i++){
      
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
