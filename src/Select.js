import React, { Component } from 'react';
import moment from 'moment-timezone';
import { PropTypes } from 'prop-types';

class Select extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const selectValue = e.target.value;
    this.props.onSelected(selectValue);
  }
  render() {
    let zones = moment.tz.names();
    return(
      <select onChange={this.handleChange}>
      {
        zones.map((element) => {
          return (
            <option value={element}>{element}</option>
          );
        })
      }
      </select>
    )
  }
}

Select.propTypes = {
  onSelected: PropTypes.func
}

export default Select;
