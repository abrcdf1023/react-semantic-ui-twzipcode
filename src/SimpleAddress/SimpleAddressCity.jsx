import _map from 'lodash/map'
import React from 'react'
import PropTypes from 'prop-types'

const SimpleAddressCity = ({
  cities, selectedCity, handleOnCityChange, ...rest
}) => (
  <select
    onChange={(e) => { handleOnCityChange(e.target.value) }}
    value={selectedCity}
    {...rest}
  >
    <option>選擇縣市</option>
    {_map(cities, city => (
      <option key={city} value={city} >{city}</option>
      ))}
  </select>
)

SimpleAddressCity.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  handleOnCityChange: PropTypes.func.isRequired,
}

export default SimpleAddressCity
