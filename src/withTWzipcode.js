import _findIndex from 'lodash/findIndex'
import _map from 'lodash/map'
import _omit from 'lodash/omit'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import data from './data.json'

export default function withTWzipcode() {
  return function wrapped(WrappedComponent) {
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

      state = { }

      handleOnCityChange = value => this.setState({ selectedCity: value, selectedDist: undefined })

      handleOnDistChange = value => this.setState({ selectedDist: value })

      render() {
        const { selectedCity, selectedDist } = this.state
        const cities = _map(data, el => el.city)
        const { dists } = data[_findIndex(data, { city: selectedCity })] || []
        const passThroughProps = _omit(this.props, ['selectedCity', 'selectedDist', 'cities', 'dists',
          'handleOnCityChange', 'handleOnDistChange', 'defaultCity', 'defaultDist'])
        // console.log({ ...passThroughProps })
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
}
