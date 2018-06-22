import React, { Component } from 'react'
import { Container, Header, Dropdown, Divider } from 'semantic-ui-react'
import { SimpleAddress } from 'react-simple-address'
import MySimpleAddres from './MySimpleAddres'

import * as styles from './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">react-simple-address</Header>
        
        <Header as="h3">Basic</Header>

        <SimpleAddress />
        
        <Header as="h3">With default value</Header>

        <SimpleAddress defaultCity='臺北市'/>
        
        <SimpleAddress defaultCity='臺北市' defaultDist='中正區' />

        <Header as="h3">Customer</Header>

        <SimpleAddress className={`ui selection dropdown ${styles.mb}`} />
        <br />
        <MySimpleAddres className={styles.mb} />
        <br />
        <MySimpleAddres className={styles.mb} />
        <br />
        <MySimpleAddres defaultCity='臺北市' className={styles.mb} />
        <br />
        <MySimpleAddres defaultCity='臺北市' defaultDist='中正區' className={styles.mb} />
        
      </Container>
    )
  }
}