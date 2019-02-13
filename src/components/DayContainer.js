import React from 'react';
import './DayContainer.css';
import DayThumb from './DayThumb';

class DayContainer extends React.PureComponent {

  render() {
    let days = this.props.days;
    let dayElements = '';
    if (days) {
      dayElements = days.map(day => {
        return <DayThumb day={day} handleFlip={this.props.handleFlip} key={day.num}/>;
      })
    }

    return (
      <div className='day-container'>
        {dayElements}
      </div>
    );
  }
}

export default DayContainer;