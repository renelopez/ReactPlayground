
import React,{ Component } from 'react';
import s from './SelectedNumber.scss';

class SelectedNumberComponent extends Component{


  static propTypes={
    number:React.PropTypes.number.isRequired,
    onUndoNumber:React.PropTypes.func.isRequired
  };

  undoNumber=()=>{
      this.props.onUndoNumber(this.props.number);
  };


  render(){
    return(<span className="selectedNumber selectedNumber-false" onClick={this.undoNumber}>{this.props.number}</span>);
  }
}

export default SelectedNumberComponent;
