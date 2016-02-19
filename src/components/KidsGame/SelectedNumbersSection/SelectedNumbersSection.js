
import React from 'react';
import s from './SelectedNumbersSection.scss'

class SelectedNumbersSectionComponent extends React.Component{

  render(){
    var numbersToRender=this.props.selectedNumbers.map(function(item,index){
        return <SelectedNumber text={item} key={index}/>
    });


    return(<div className="selectedSection well">
             {numbersToRender}
           </div>);
  }
}

export default SelectedNumbersSectionComponent;
