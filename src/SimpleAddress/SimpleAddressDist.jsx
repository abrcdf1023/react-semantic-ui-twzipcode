import _map from 'lodash/map'
import React from 'react'
import PropTypes from 'prop-types'

const SimpleAddressDist = ({
  dists, selectedDist, selectedPostalCode, handleOnDistChange, ...rest
}) => (
  <select
    onChange={(e) => { handleOnDistChange(e.target.value) }}
    value={selectedDist}
    {...rest}
  >
    <option>選擇地區</option>
    {_map(dists, dist => (
      <option
        key={dist.name}
        value={dist.name}
      >{dist.name}
      </option>
    ))}
  </select>
)

SimpleAddressDist.propTypes = {
  dists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
  })).isRequired,
  selectedDist: PropTypes.string.isRequired,
  selectedPostalCode: PropTypes.string.isRequired,
  handleOnDistChange: PropTypes.func.isRequired,
}

export default SimpleAddressDist
