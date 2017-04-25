import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment-timezone';

class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      dateTime: moment().tz(props.timezone).format('MMMM Do YYYY, h:mm:ss a'),
      showClock: true
    }
  }

  componentWillMount() {
    const updateTime = () => {
      this.setState({
        dateTime: moment().tz(this.props.timezone).format('MMMM Do YYYY, h:mm:ss a')
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
      {this.state.showClock && this.state.dateTime}
      </p>
    );
  }
}

Clock.propTypes = {
  timezone: PropTypes.string.isRequired
}

export default Clock;
