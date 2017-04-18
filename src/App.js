import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dateTime: new Date(),
      showClock: true
    }
  }

  componentWillMount() {
    const updateTime = () => {
      this.setState({
        dateTime: new Date()
      })
    }
    this.handle = window.setInterval(updateTime, 1000);
  }

  componentDidMount() {
    console.log("Did mount")
  }

  componentWillUnmount() {
    window.clearInterval(this.handle);
  }

  render() {
    return (
      <div className="App">
      <button onClick={() => {
        this.setState({
          showClock: !this.state.showClock
        });
      }}>Hide</button>
        <p>
          {this.state.showClock && this.state.dateTime.toString()}
        </p>
      </div>
    );
  }
}

export default App;
