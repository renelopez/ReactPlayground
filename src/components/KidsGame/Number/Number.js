
import React,{ Component } from 'react';
import s from './Number.scss';

class NumberComponent extends Component{


  static propTypes={
    number:React.PropTypes.number.isRequired,
    statusClass:React.PropTypes.string.isRequired
  };

  selectNumber=()=>{
      this.props.onSelectNumber(this.props.number);
  };


  render(){
    return(<span className={this.props.statusClass} onClick={this.selectNumber}>{this.props.number}</span>);
  }
}

export default NumberComponent;
