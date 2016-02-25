
import React,{ Component } from 'react';
import s from './Redraw.scss';

class RedrawComponent extends Component{


  static propTypes={

  };

  raiseRedraw=()=>{
    this.props.onRedraw();
  };


  render(){
    return(
      <button className="btn btn-warning btn-raised " onClick={this.raiseRedraw}>
        <span className="glyphicon glyphicon-repeat"> {this.props.redraws}</span>
      </button>
    );
  }
}

export default RedrawComponent;
