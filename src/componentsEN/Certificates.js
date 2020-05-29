import React from 'react';
import { Container, Grid, Image, Segment, Header } from 'semantic-ui-react'
import cert from '../images/certificate-fullstack.png'
const Certificates = () => {
  return (
    <Container>
      <Segment.Group>
        <Segment>
          <Image src={cert} />
        </Segment>
        <Segment style={{paddingTop:'15px',paddingBottom:'15px'}}>
          <Header>Full Stack Open 2019 from The University of Helsinki</Header>
        </Segment>
      </Segment.Group>
    </Container>
  )
}

export default Certificates;