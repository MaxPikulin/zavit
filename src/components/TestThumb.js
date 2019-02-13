import React, { Component } from 'react';
import './TestThumb.css';

class TestThumb extends Component {
  gr = 0;

  clickHandler(e) {
    // console.log(e);
    if (e.shiftKey) this.gr--;
    else this.gr = this.gr+1 > 10 ? 10 : this.gr+1;
    e.currentTarget.querySelector('.green').style.height = this.gr + '0%';
    // this.gr++;
    // console.log(this.gr);
    // this.render();
  }
  render() {
    let greenBox = {
      backgroundColor: 'green',
      height: this.gr + '0%',
    }
    let redBox = {
      height: '30%'
    }
    return (
      <div className='day-thumb-container' onClick={(e) => this.clickHandler(e)}>
        <div style={redBox} className='day-thumb req-box'>

        </div>
        <div style={greenBox} className='day-thumb green'>

        </div>
        <div className='day-thumb'>
          hello
        </div>
      </div>
    );
  }
}


export default TestThumb;