import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { default as Clock } from './Clock';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     dateTime: new Date(),
  //     showClock: true
  //   }
  // }
  //
  // componentWillMount() {
  //   const updateTime = () => {
  //     this.setState({
  //       dateTime: new Date()
  //     })
  //   }
  //   this.handle = window.setInterval(updateTime, 1000);
  // }
  //
  // componentDidMount() {
  //   console.log("Did mount")
  // }
  //
  // componentWillUnmount() {
  //   window.clearInterval(this.handle);
  // }

  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
