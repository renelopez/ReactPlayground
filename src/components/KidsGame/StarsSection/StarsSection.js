
import React from 'react';
import s from './StarsSection.scss'

class StarsSectionComponent extends React.Component{

  render(){
      return(
        <div className="starsSection well">
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
        </div>);
  }
}

export default StarsSectionComponent;
