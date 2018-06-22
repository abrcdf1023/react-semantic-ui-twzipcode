import React, { Component } from 'react'
import { Container, Header, Dropdown, Divider } from 'semantic-ui-react'
import { TWzipcode } from 'react-twzipcode'
import MyTWzipcode from './MyTWzipcode'

import * as styles from './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">react-twzipcode</Header>
        
        <Header as="h3">Basic</Header>

        <TWzipcode />
        
        <Header as="h3">With default value</Header>

        <TWzipcode defaultCity='臺北市'/>
        
        <TWzipcode defaultCity='臺北市' defaultDist='中正區' />

        <Header as="h3">Customer</Header>

        <TWzipcode className={`ui selection dropdown ${styles.mb}`} />
        <br />
        <MyTWzipcode className={styles.mb} />
        <br />
        <MyTWzipcode className={styles.mb} />
        <br />
        <MyTWzipcode defaultCity='臺北市' className={styles.mb} />
        <br />
        <MyTWzipcode defaultCity='臺北市' defaultDist='中正區' className={styles.mb} />
        
      </Container>
    )
  }
}