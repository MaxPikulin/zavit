import React, { Component } from 'react';
import './DayContainer.css';
import DayThumb from './DayThumb';

class DayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  loadFromStorage() {
    let object = localStorage.getItem('zavit') || '{}';
    console.log('object :', object);
    object = JSON.parse(object);
    this.setState(object, () => {
      console.log('from load');
      console.log('this.state :', this.state);
      if (!this.state.days) {
        console.log('no days');
        console.log(this.state.days);
        let days = [];
        for (let i = 1; i <= 365; i++) {
          days.push({ dayNum: i });
        }
        this.setState({
          days: days,
        }, () => this.saveToStorage());
      }
    });
  }

  saveToStorage() {
    let object = this.state;
    object = JSON.stringify(object);
    localStorage.setItem('zavit', object);
    console.log('object :', object);
  }

  componentWillMount() {
    this.loadFromStorage();
  }

  render() {
    let dayByMonth = '';
    if (this.state.days) {
      dayByMonth = this.state.days.map(day => {
        return <DayThumb key={day.dayNum} day={day} />;
      })
    }
    return (
      <div className='dayContainer'>
        {dayByMonth}
      </div>
    );
  }
}

export default DayContainer;