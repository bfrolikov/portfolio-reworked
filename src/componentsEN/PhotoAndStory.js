import React from 'react';
import {Grid, Image, Card,Header } from 'semantic-ui-react';
import face from '../images/face.jpg';

const PhotoAndStory = () => {
  return (
    <Grid stackable style={{marginBottom:'35px',marginTop:'25px'}}>
      <Grid.Row>
        <Grid.Column width={5}>
            <Card >
            <Image src={face}></Image>
          </Card>
        </Grid.Column>
        <Grid.Column width={7} style={{ textAlign:'left', fontSize:'1.7em',paddingTop:'25px',marginLeft:'5%'}}>
          <Header size = 'medium' inverted>Hi! My name is Boris Frolikov</Header>
          <p>What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default PhotoAndStory;