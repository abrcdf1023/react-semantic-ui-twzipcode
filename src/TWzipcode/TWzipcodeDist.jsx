import _map from 'lodash/map'
import React from 'react'
import PropTypes from 'prop-types'

const TWzipcodeDist = ({
  dists, selectedDist, handleOnDistChange, ...rest
}) => (
  <select
    onChange={(e) => { handleOnDistChange(e.target.value) }}
    value={selectedDist}
    {...rest}
  >
    <option>選擇地區</option>
    {_map(dists, dist => (
      <option key={dist.name} value={dist.name} >{dist.name}</option>
          ))}
  </select>
)

TWzipcodeDist.propTypes = {
  dists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  })).isRequired,
  selectedDist: PropTypes.string.isRequired,
  handleOnDistChange: PropTypes.func.isRequired,
}

export default TWzipcodeDist
