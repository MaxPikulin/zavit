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
      backgroundColor: 'red',
      height: '50%'
    }
    return (
      <div className='container' onClick={(e) => this.clickHandler(e)}>
        <div style={redBox} className='testThumb'>

        </div>
        <div style={greenBox} className='testThumb green'>

        </div>
        <div className='testThumb'>
          hello
        </div>
      </div>
    );
  }
}


export default TestThumb;