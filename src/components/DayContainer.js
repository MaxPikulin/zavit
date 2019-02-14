import React from 'react';
import './DayContainer.css';
import DayThumb from './DayThumb';

class DayContainer extends React.PureComponent {
  today() {
    let now = new Date();
    let yearStart = new Date(now.getFullYear(), 0, 1, 6);
    let todayNum = Math.floor((now - yearStart) / 86400000);
    return todayNum;
  }
  render() {
    let todayNum = this.today();
    let days = this.props.days;
    let dayElements = [];
    if (days) {
      for (let dayNum in days) {
        // console.log(days[dayNum]);
        dayElements.push(<DayThumb day={days[dayNum]} handleFlip={this.props.handleFlip} key={dayNum} id={dayNum} todayNum={todayNum}/>);
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