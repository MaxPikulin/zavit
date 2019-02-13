import React from 'react';
import './DayThumb.css';

class DayThumb extends React.PureComponent {

  today() {
    let td = new Date().toLocaleDateString('en-GB').slice(0, -5);
    if (this.props.day.date === td)
      return { borderColor: 'red',
    backgroundColor: 'white', }
    return {};
  }

  render() {
    let { day, handleFlip } = this.props;
    let greenBox = {
      backgroundColor: 'green',
      height: '10%',
    }
    let today = this.today();

    return (
      <div style={today} className='day-thumb-container'>
        <div className='day-thumb req-box'></div>
        <div style={greenBox} className='day-thumb'></div>
        <div className={'day-thumb'} id={day.num} onClick={(e) => handleFlip(e)}>
          {day.date}
        </div>
      </div>
    );
  }
}

export default DayThumb;