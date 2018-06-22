import _findIndex from 'lodash/findIndex'
import _map from 'lodash/map'
import _omit from 'lodash/omit'
import _merge from 'lodash/merge'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import data from './data'

function findDists(source, value) {
  const { dists } = source[_findIndex(source, { city: value })]
  return dists
}

function findPostalCode(dists, value) {
  const { postalCode } = dists[_findIndex(dists, { name: value })]
  return postalCode
}

export default function withSimpleAddress(cusConfigs) {
  const defaultConfig = {
    data,
  }
  const configs = _merge(defaultConfig, cusConfigs)
  return function wrapper(WrappedComponent) {
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
          if (props.defaultDist !== '') {
            this.state.selectedDist = props.defaultDist
            this.state.dists = findDists(configs.data, props.defaultCity)
            this.state.selectedPostalCode = findPostalCode(this.state.dists, props.defaultDist)
          }
        } else if (props.defaultDist !== '') {
          console.warn('WARN, There are too many dist in the same name. You should pass default city as well. ')
        }
      }

      state = {
        cities: _map(configs.data, el => el.city),
        dists: [],
        selectedCity: '',
        selectedDist: '',
        selectedPostalCode: '',
      }

      handleOnCityChange = (value) => {
        this.setState({
          selectedCity: value,
          selectedDist: '',
          selectedPostalCode: '',
          dists: findDists(configs.data, value),
        })
      }

      handleOnDistChange = (value) => {
        const { dists } = this.state
        this.setState({
          selectedDist: value,
          selectedPostalCode: findPostalCode(dists, value),
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
}
