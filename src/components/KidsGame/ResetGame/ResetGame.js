
import React,{ Component } from 'react';
import s from './ResetGame.scss'

class ResetGameComponent extends Component {

  static propTypes={
    onReset:React.PropTypes.func.isRequired
  };

  reset=()=>{
    this.props.onReset();
  };

  render() {
    return (
            <button className="btn btn-danger btn-raised" onClick={this.reset}>Reset Game</button>
          );
  }
}

export default ResetGameComponent;
