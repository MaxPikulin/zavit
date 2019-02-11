import React from 'react';
import './DayThumb.css';

class DayThumb extends React.PureComponent {
  render() {
    let { day, handleFlip } = this.props;
    let greenBox = {
      backgroundColor: 'green',
      height: '0%',
    }

    return (
      <div className='container' /* onClick={(e) => this.clickHandler(e)} */>
        <div className='testThumb redBox'></div>
        <div style={greenBox} className='testThumb green'></div>
        <div className={'testThumb ' + this.props.day.classList} id={day.num} onClick={(e) => handleFlip(e)}>
          {day.date}
        </div>
      </div>
    );
  }
}

export default DayThumb;