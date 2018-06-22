# react-simple-address

**react-simple-address document**

## Get Started

```sh
yarn add react-simple-address
```

Or

```sh
npm i react-simple-address
```

## Example

```sh
cd example && yarn && yarn start
```

## Basic Usage

```javascript
import withSimpleAddress from 'react-simple-address'
```

### Create your SimpleAddres component

```javascript
const MySimpleAddres = ({
  // select city value
  selectedCity,
  // select dist value
  selectedDist,
  // postal code value
  selectedPostalCode,
  // use to render select city options
  cities,
  // use to render select dist options
  dists,
  // set new value while city change
  handleOnCityChange,
  // set new value while dist change
  handleOnDistChange,
  // set new value while postal code change
  handleOnPostalCodeChange,
}) => (
  ...
)
```

Semantic-ui-react for example.

```javascript
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
  <Input
    value={selectedPostalCode}
    onChange={(e, { value }) => { handleOnPostalCodeChange(value) }}
  />
```

```javascript
export default withSimpleAddress()(MySimpleAddres)
```

Now you can import it anywhere.

```javascript
<MySimpleAddres defaultCity='臺北市' defaultDist='中正區'/>
```

## configs

You can replace default data with following schema.

```javascript
withSimpleAddress({
  data: [{
    city: '基隆市',
    dists: [
      {
        name: '仁愛區',
        postalCode: '200',
      },
    ],
  },
  ...
  ]
})(MySimpleAddres)
```

## License

MIT License

Copyright (c) 2018 SP_Penguin