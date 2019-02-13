import React, { /* Component */ } from 'react';
import DayContainer from './DayContainer';
import TestThumb from './TestThumb';
import DayDetails from './DayDetails';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    }
    this.handleFlip = this.handleFlip.bind(this);
    this.saveToStorage = this.saveToStorage.bind(this);
  }

  handleGenerateClick() {
    function getDateByNum(number, year) {
      year = year || '2019';
      let date = new Date(`${year}/01/01`).getTime();
      date = date + (86400000 * number);
      date = new Date(date).toLocaleDateString('en-GB');
      let day = date.split('/')[0];
      let month = date.split('/')[1];
      return day + '/' + month;
    }
    let object = localStorage.getItem('zavit') || '{}';
    object = JSON.parse(object);
    object.days = object.days || [];
    if (object.days.length !== 365) {
      for (let i = 0; i < 365; i++) {
        let day = {
          num: 0,
          date: '01/01/2019',
          hours: 0,
          proms: []
        }
        if (object.days.some(d => d.num === i)) continue;
        day.num = i;
        day.date = getDateByNum(i);
        object.days.push(day);
      }
    }
    // console.log(object);
    this.setState({
      days: object.days,
    }, () => this.saveToStorage());
    
  }

  // loadFromStorage() {
  //   let object = localStorage.getItem('zavit') || '{}';
  //   object = JSON.parse(object);
  //   this.setState(object);
  // }

  saveToStorage() {
    let object = this.state;
    object = JSON.stringify(object);
  localStorage.setItem('zavit', object);
  }

  componentWillMount() {
    // this.loadFromStorage();
    this.handleGenerateClick();
  }


  handleFlip(e) {
    e.target.classList.toggle('red');
    let newDays = this.state.days.slice();
    newDays[e.target.id].classList = 'red';
    // this.setState({
    //   days: newDays,
    // }, () => this.saveToStorage())
  }
  
  handleCloseDetails(e) {
    // console.log(e.parent);
    e.target.parentNode.parentNode.style.visibility = 'hidden';
  }

  render() {
    return (
      <div className="container">
        <TestThumb /><button onClick={(e) => this.handleGenerateClick(e)}>Generate object</button>
        <DayContainer days={this.state.days} handleFlip={this.handleFlip} />
        <DayDetails closeDetails={this.handleCloseDetails} />
      </div>
    );
  }
}

export default App;