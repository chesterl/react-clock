import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      dateTime: moment(),
      showClock: true
    }
  }

  componentWillMount() {
    const updateTime = () => {
      this.setState({
        dateTime: moment()
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
      <p>
      {this.state.showClock && this.state.dateTime.toString()}
      </p>
    );
  }
}

export default Clock;
