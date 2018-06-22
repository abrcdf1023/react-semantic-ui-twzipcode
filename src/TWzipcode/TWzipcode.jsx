import React from 'react'
import PropTypes from 'prop-types'
import withTWzipcode from '../withTWzipcode'

import TWzipcodeCity from './TWzipcodeCity'
import TWzipcodeDist from './TWzipcodeDist'

const TWzipcode = ({
  cities, dists, selectedCity, selectedDist, handleOnCityChange, handleOnDistChange, ...rest
}) => {
  console.log(selectedDist)
  return (
    <React.Fragment>
      <TWzipcodeCity
        cities={cities}
        selectedCity={selectedCity}
        handleOnCityChange={handleOnCityChange}
        {...rest}
      />
      <TWzipcodeDist
        dists={dists}
        selectedDist={selectedDist}
        handleOnDistChange={handleOnDistChange}
        {...rest}
      />
    </React.Fragment>)
}

TWzipcode.propTypes = {
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

export default withTWzipcode(TWzipcode)
