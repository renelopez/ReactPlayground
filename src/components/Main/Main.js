require('normalize.css');
require('styles/App.scss');

import React from 'react';

import Game from '../KidsGame/Game/Game'


class AppComponent extends React.Component {


  render() {
    return (
      <div className="index">
       <Game />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
