import React, { Component } from 'react';
import './DayThumb.css';

class DayThumb extends Component {

  getDateByNum(year, number) {
    let date = new Date(`${year}/01/01`).getTime();
    date = date + (86400000 * (number - 1));
    return new Date(date).toLocaleDateString('en-GB').split('/');
  }
  render() {
    let { day, handleFlip } = this.props;
    let year = '2019';
    let [dd, mm, yyyy] = this.getDateByNum(year, day.dayNum)
    

    return (
      <div className={'dayThumb ' + this.props.day.classList} id={day.dayNum} onClick={(e) => handleFlip(e)}>
        {dd + '/' + mm}
      </div>
    );
  }
}

export default DayThumb;