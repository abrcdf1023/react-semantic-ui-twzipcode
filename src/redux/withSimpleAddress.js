import _map from 'lodash/map'
import _omit from 'lodash/omit'
import _merge from 'lodash/merge'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import data from '../data'
import {
  findDists,
  findPostalCode,
} from '../utils'

export default function withSimpleAddress(cusConfigs) {
  const defaultConfig = {
    data,
  }
  const configs = _merge(defaultConfig, cusConfigs)
  return function wrapper(WrappedComponent) {
    return class SimpleAddress extends Component {
      static propTypes = {
        selectedCity: PropTypes.string,
        selectedDist: PropTypes.string,
        selectedPostalCode: PropTypes.string,
        changeCity: PropTypes.func.isRequired,
        changeDist: PropTypes.func.isRequired,
        changePostalCode: PropTypes.func.isRequired,
      }

      static defaultProps = {
        selectedCity: '',
        selectedDist: '',
        selectedPostalCode: '',
      }

      constructor(props) {
        super(props)
        if (props.selectedDist !== '') {
          this.state.dists = findDists(configs.data, props.selectedCity)
        }
        if (props.selectedDist !== '' && props.selectedPostalCode === '') {
          props.changePostalCode(findPostalCode(this.state.dists, props.selectedDist))
        }
        if (props.selectedCity === '' && props.selectedDist !== '') {
          console.warn('WARN, There are too many dist in the same name. You should pass default city as well. ')
        }
      }

      state = {
        cities: _map(configs.data, el => el.city),
        dists: [],
      }

      handleOnCityChange = (value) => {
        this.props.changeCity(value)
        this.props.changeDist('')
        this.props.changePostalCode('')
        this.setState({
          dists: findDists(configs.data, value),
        })
      }

      handleOnDistChange = (value) => {
        this.props.changeDist(value)
        this.props.changePostalCode(findPostalCode(this.state.dists, value))
      }

      handleOnPostalCodeChange = value => this.props.changePostalCode(value)

      render() {
        const { cities, dists } = this.state
        const passThroughProps = _omit(this.props, ['cities', 'dists',
          'handleOnCityChange', 'handleOnDistChange', 'handleOnPostalCodeChange'])
        return (
          <WrappedComponent
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
