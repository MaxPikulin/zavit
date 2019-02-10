import React, { Component } from 'react';
import './DayThumb.css';

class DayThumb extends Component {

  getDateByNum(year, number) {
    let date = new Date(`${year}/01/01`).getTime();
    date = date + (86400000 * (number - 1));
    return new Date(date).toLocaleDateString('en-GB');
  }
  render() {
    let date;
    let year = '2019';
    

    return (
      <div className='dayThumb' id={this.props.id}>
        {this.getDateByNum(year, this.props.day.dayNum)}
      </div>
    );
  }
}

export default DayThumb;