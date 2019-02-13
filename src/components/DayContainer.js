import React from 'react';
import './DayContainer.css';
import DayThumb from './DayThumb';

class DayContainer extends React.PureComponent {

  render() {
    let days = this.props.days;
    let dayElements = [];
    if (days) {
      for (let dayNum in days) {
        console.log(days[dayNum]);
        dayElements.push(<DayThumb day={days[dayNum]} handleFlip={this.props.handleFlip} key={dayNum} id={dayNum}/>);
      }
    }

    return (
      <div className='day-container'>
        {dayElements}
      </div>
    );
  }
}

export default DayContainer;