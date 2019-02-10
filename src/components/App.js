import React, { Component } from 'react';
import DayContainer from './DayContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleFlip = this.handleFlip.bind(this);
    this.saveToStorage = this.saveToStorage.bind(this);
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
          days.push({
            dayNum: i,
            classList: ''
          });
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
  }

  componentWillMount() {
    this.loadFromStorage();
  }


  handleFlip(e) {
    e.target.classList.toggle('red');
    let newDays = this.state.days.slice();
    newDays[e.target.id - 1].classList = 'red';
    this.setState({
      days: newDays,
    }, () => this.saveToStorage())
  }

  render() {
    return (
      <div>
        <DayContainer days={this.state.days} handleFlip={this.handleFlip} />
      </div>
    );
  }
}

export default App;