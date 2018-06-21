import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _omit from 'lodash/omit'

import data from './data.json'

export default class TWzipcode extends Component {
  static propTypes = {
    select: PropTypes.node,
    defaultCity: PropTypes.string,
    defaultDist: PropTypes.string,
  }

  render() {
    const passThroughProps = _omit(this.props, ['onClick'])
    return (
      children
    )
  }
}
