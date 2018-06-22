import React, { Component } from 'react'
import { Container, Header, Dropdown, Divider } from 'semantic-ui-react'
import MySimpleAddres from './MySimpleAddres'

import * as styles from './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">react-simple-address</Header>
        <br />
        <MySimpleAddres/>
        <br />
        <MySimpleAddres defaultCity='臺北市'/>
        <br />
        <MySimpleAddres defaultCity='臺北市' defaultDist='中正區'/>
        <br />
        <MySimpleAddres defaultCity='臺北市' defaultDist='中正區' defaultPostalCode='10000'/>
      </Container>
    )
  }
}
