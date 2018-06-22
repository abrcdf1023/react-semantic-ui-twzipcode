import _findIndex from 'lodash/findIndex'
import _map from 'lodash/map'
import _omit from 'lodash/omit'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import data from './data'

export default function withTWzipcode(WrappedComponent) {
  return class TWzipcode extends Component {
    static propTypes = {
      defaultCity: PropTypes.string,
      defaultDist: PropTypes.string,
    }

    static defaultProps = {
      defaultCity: '',
      defaultDist: '',
    }

    constructor(props) {
      super(props)
      if (props.defaultCity !== '') {
        this.state.selectedCity = props.defaultCity
      }
      if (props.defaultDist !== '') {
        this.state.selectedDist = props.defaultDist
        if (props.defaultCity === '') {
          console.warn('WARN, You should pass defaultCity as well because there are too many same dist name in Taiwan.')
        }
      }
    }

    state = {
      selectedCity: '',
      selectedDist: '',
    }

    handleOnCityChange = value => this.setState({ selectedCity: value, selectedDist: '' })

    handleOnDistChange = value => this.setState({ selectedDist: value })

    render() {
      const { selectedCity, selectedDist } = this.state
      const cities = _map(data, el => el.city)
      const distsIndex = _findIndex(data, { city: selectedCity })
      const dists = distsIndex !== -1 ? data[distsIndex].dists : []
      const passThroughProps = _omit(this.props, ['selectedCity', 'selectedDist', 'cities', 'dists',
        'handleOnCityChange', 'handleOnDistChange', 'defaultCity', 'defaultDist'])
      return (
        <WrappedComponent
          selectedCity={selectedCity}
          selectedDist={selectedDist}
          cities={cities}
          dists={dists}
          handleOnCityChange={this.handleOnCityChange}
          handleOnDistChange={this.handleOnDistChange}
          {...passThroughProps}
        />
      )
    }
  }
}
