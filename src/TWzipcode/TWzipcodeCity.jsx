import _map from 'lodash/map'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TWzipcodeCity extends Component {
  onCityChange = e => this.props.handleOnCityChange(e.target.value)
  render() {
    const {
      cities, selectedCity, handleOnCityChange, ...rest
    } = this.props
    return (
      <select onChange={this.onCityChange} value={selectedCity} {...rest}>
        <option>選擇縣市</option>
        {_map(cities, city => (
          <option key={city} value={city} >{city}</option>
          ))}
      </select>
    )
  }
}
