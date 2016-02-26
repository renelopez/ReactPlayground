
import React,{ Component } from 'react';
import s from './AcceptAnswer.scss';

class AcceptAnswerComponent extends Component{


  static propTypes={
    actionState:React.PropTypes.number.isRequired,
    isDisabled:React.PropTypes.bool.isRequired,
    onActionClick:React.PropTypes.func.isRequired
  };

  onActionClick=()=>{
    if(this.props.actionState < 2) {
      this.props.onActionClick(this.props.actionState + 1);
    }
  };

  render(){
    var classToRender,textToRender;
    switch (this.props.actionState){
      case 0:textToRender='=';classToRender='btn btn-success btn-raised';break;
      case 1:textToRender=String.fromCharCode(10003);classToRender='btn btn-success btn-raised';break;
      case 2:textToRender=String.fromCharCode(10005);classToRender='btn btn-danger btn-raised';break;
    }

    return(
        <button className={classToRender} onClick={this.onActionClick} disabled={this.props.isDisabled} >{textToRender}</button>
    );
  }
}

export default AcceptAnswerComponent;
