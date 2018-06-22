import React, { Component } from 'react'
import { Container, Header, Dropdown, Divider } from 'semantic-ui-react'
import MySimpleAddress from './MySimpleAddress'
import MyReduxSimpleAddress from '../containers/MyReduxSimpleAddress'

import * as styles from './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">react-simple-address</Header>
        <br />
        <MySimpleAddress/>
        <br />
        <MySimpleAddress defaultCity='臺北市'/>
        <br />
        <MySimpleAddress defaultCity='臺北市' defaultDist='中正區'/>
        <br />
        <MySimpleAddress defaultCity='臺北市' defaultDist='中正區' defaultPostalCode='10000'/>
      </Container>
    )
  }
}
