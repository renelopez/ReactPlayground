import React from 'react';
import s from './StarsSection.scss'


import Star from '../Star';


class StarsSectionComponent extends React.Component {

  static propTypes = {
    stars: React.PropTypes.number.isRequired
  };


  render() {
    let totalRenderedStars = [];
    let totalCount = this.props.stars;

    for (let i = 0; i < totalCount; i++) {
      totalRenderedStars.push(<Star key={i}/>)
    }

    return (
      <div className="starsSection well">
        {totalRenderedStars}
      </div>);
  }
}

export default StarsSectionComponent;
