import _map from 'lodash/map'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TWzipcodeDist extends Component {
  onDistChange = e => this.props.handleOnDistChange(e.target.value)
  render() {
    const {
      dists, selectedDist, handleOnDistChange, ...rest
    } = this.props
    return (
      <select onChange={this.onDistChange} value={selectedDist} {...rest}>
        <option>選擇地區</option>
        {_map(dists, dist => (
          <option key={dist.name} value={dist.name} >{dist.name}</option>
          ))}
      </select>
    )
  }
}
