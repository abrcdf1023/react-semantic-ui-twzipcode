import React from 'react'
import PropTypes from 'prop-types'
import withSimpleAddress from '../withSimpleAddress'

import SimpleAddressCity from './SimpleAddressCity'
import SimpleAddressDist from './SimpleAddressDist'

const SimpleAddress = ({
  cities, dists, selectedCity, selectedDist, handleOnCityChange, handleOnDistChange, ...rest
}) => (
  <React.Fragment>
    <SimpleAddressCity
      cities={cities}
      selectedCity={selectedCity}
      handleOnCityChange={handleOnCityChange}
      {...rest}
    />
    <SimpleAddressDist
      dists={dists}
      selectedDist={selectedDist}
      handleOnDistChange={handleOnDistChange}
      {...rest}
    />
  </React.Fragment>)

SimpleAddress.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  dists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  })).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedDist: PropTypes.string.isRequired,
  handleOnCityChange: PropTypes.func.isRequired,
  handleOnDistChange: PropTypes.func.isRequired,
}

export default withSimpleAddress(SimpleAddress)
