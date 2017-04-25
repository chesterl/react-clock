import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment-timezone';
import { default as Clock } from './Clock';
import { default as Select } from './Select';

class App extends Component {
  constructor() {
    super();
    this.selectTime = this.selectTime.bind(this);
    this.state = {
      timezone: moment.tz.names().shift()
    }
  }
  selectTime(value) {
    this.setState({
      timezone: value
    })
  }
  render() {
    return (
      <div className="App">
        <Clock timezone={this.state.timezone}/>
        <Select onSelected={this.selectTime} />
      </div>
    );
  }
}

export default App;
