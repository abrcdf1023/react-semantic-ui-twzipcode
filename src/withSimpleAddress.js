import _findIndex from 'lodash/findIndex'
import _map from 'lodash/map'
import _omit from 'lodash/omit'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import data from './data'

export default function withSimpleAddress(WrappedComponent) {
  return class SimpleAddress extends Component {
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
      cities: _map(data, el => el.city),
      dists: [],
      selectedCity: '',
      selectedDist: '',
      selectedPostalCode: '',
    }

    handleOnCityChange = (value) => {
      const { dists } = data[_findIndex(data, { city: value })]
      this.setState({
        selectedCity: value,
        selectedDist: '',
        selectedPostalCode: '',
        dists,
      })
    }

    handleOnDistChange = (value) => {
      const { dists } = this.state
      const { postalCode } = dists[_findIndex(dists, { name: value })]
      this.setState({
        selectedDist: value,
        selectedPostalCode: postalCode,
      })
    }

    handleOnPostalCodeChange = value => this.setState({ selectedPostalCode: value })

    render() {
      const {
        cities, dists,
        selectedCity, selectedDist, selectedPostalCode,
      } = this.state
      const passThroughProps = _omit(this.props, ['selectedCity', 'selectedDist', 'selectedPostalCode', 'cities', 'dists',
        'handleOnCityChange', 'handleOnDistChange', 'handleOnPostalCodeChange', 'defaultCity', 'defaultDist'])
      return (
        <WrappedComponent
          selectedCity={selectedCity}
          selectedDist={selectedDist}
          selectedPostalCode={selectedPostalCode}
          cities={cities}
          dists={dists}
          handleOnCityChange={this.handleOnCityChange}
          handleOnDistChange={this.handleOnDistChange}
          handleOnPostalCodeChange={this.handleOnPostalCodeChange}
          {...passThroughProps}
        />
      )
    }
  }
}
