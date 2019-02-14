import React from 'react';
import './DayThumb.css';

class DayThumb extends React.PureComponent {

  todayStyle(todayNum, thisNum) {
    switch (true) {
      case todayNum < thisNum:
        return 'day-future';
      case todayNum > thisNum:
        return 'day-past';
      default:
        return 'day-today';
    }
  }

  render() {
    let { day, handleFlip, id, todayNum } = this.props;
    let greenBox = {
      backgroundColor: 'green',
      height: '0%',
    }
    let today = this.todayStyle(todayNum, id);

    return (
      <div className={'day-thumb-container day-wh ' + today}>
        <div className='day-thumb day-wh req-box'></div>
        <div style={greenBox} className='day-thumb day-wh'></div>
        <div className='day-thumb day-wh' id={id} onClick={(e) => handleFlip(e)}>
          {day.date}
        </div>
      </div>
    );
  }
}

export default DayThumb;