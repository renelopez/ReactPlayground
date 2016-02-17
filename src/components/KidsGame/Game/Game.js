
import React from 'react';

import StarsSection from '../StarsSection'
import SelectedNumbersSection from '../SelectedNumbersSection'
import AvailableNumbersSection from '../AvailableNumbersSection'

class GameComponent extends React.Component{

  render(){
    return(<div className="container">
      <StarsSection />
      <SelectedNumbersSection />
      <AvailableNumbersSection />
    </div>)
  }
}

export default GameComponent;
