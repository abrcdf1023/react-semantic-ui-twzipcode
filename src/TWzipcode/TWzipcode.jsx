import React from 'react'
import withTWzipcode from '../withTWzipcode'

import TWzipcodeCity from './TWzipcodeCity'
import TWzipcodeDist from './TWzipcodeDist'

const TWzipcode = ({
  cities, dists, selectedCity, selectedDist, handleOnCityChange, handleOnDistChange, ...rest
}) => (
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


export default withTWzipcode()(TWzipcode)
