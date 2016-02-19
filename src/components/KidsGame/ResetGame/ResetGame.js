
import React from 'react';
import s from './ResetGame.scss'

class ResetGameComponent extends React.Component {

  static propTypes={
    onReset:React.PropTypes.func.isRequired
  };

  reset=()=>{
    this.props.onReset();
  };

  render() {
    return (<div className="middleSection">
            <button className="btn btn-danger btn-raised" onClick={this.reset}>Reset Game</button>
            </div>
          );
  }
}

export default ResetGameComponent;
