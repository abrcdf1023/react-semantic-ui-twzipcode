import _map from 'lodash/map'
import React from 'react'
import { Form, Dropdown, Input } from 'semantic-ui-react'

const SimpleAddress = ({
  selectedCity,
  selectedDist,
  selectedPostalCode,
  cities,
  dists,
  handleOnCityChange,
  handleOnDistChange,
  handleOnPostalCodeChange,
}) => {
  return (
    <Form>
      <Dropdown
        selection
        onChange={(e, { value }) => { handleOnCityChange(value) }}
        value={selectedCity}
        placeholder="選擇縣市"
        options={_map(cities, city => ({
          key: city,
          text: city,
          value: city,
        }))}
      />
      <Dropdown
        selection
        onChange={(e, { value }) => { handleOnDistChange(value) }}
        value={selectedDist}
        placeholder="選擇地區"
        options={_map(dists, dist => ({
          key: dist.name,
          text: dist.name,
          value: dist.name,
        }))}
      />
      <Input value={selectedPostalCode} onChange={(e, { value }) => { handleOnPostalCodeChange(value) }}/>
    </Form>
  )
}

export default SimpleAddress