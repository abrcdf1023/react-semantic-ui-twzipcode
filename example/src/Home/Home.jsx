import React, { Component } from 'react'
import { Container, Header, Select } from 'semantic-ui-react'
import TWzipcode from 'react-semantic-ui-twzipcode'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <br/>
        <Header>react-semantic-ui-twzipcode</Header>
        <TWzipcode select={Select} defaultCity='臺北市' defaultDist='中正區'/>
        
        <TWzipcode.City select={Select} id="city"/>
        <TWzipcode.Dist select={Select} for="city"/>
      </Container>
    )
  }
}