import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { Segment, Container, Button, Divider, Responsive } from 'semantic-ui-react';
import PhotoAndStory from './componentsEN/PhotoAndStory'
import PageMenu from './componentsEN/PageMenu';
import Experience from './componentsEN/Experience';
import Certificates from './componentsEN/Certificates';
import SnakeCard from './componentsEN/SnakeCard';
import BotCard from './componentsEN/BotCard';
import AndroidAppCard from './componentsEN/AndroidAppCard';
import WateringCard from './componentsEN/WateringCard';
import cards from './objects/cardsEN';
import projectsEN from './objects/projectStringsEN';
const SiteEN = () => {
  const [rowsShown, setRowsShown] = useState(1);
  return (
    <div>
      <Segment.Group style={{ border: '0px' }}>
        <Segment inverted textAlign='center'>
          <Container style={{}}>
            <PageMenu />
            <Route exact path="/en">
              <PhotoAndStory />
            </Route>
          </Container>
        </Segment>
        <Segment >
          <Route exact path="/en">
            <Experience rowsShown={rowsShown} />
            <Container textAlign='center'>
              <Button style={{ marginTop: '25px' }}
                onClick={() => setRowsShown(rowsShown + 1)}
                disabled={rowsShown >= cards.length}
                primary
              >
                Show More
              </Button>
            </Container>
          </Route>
          <Route exact path="/en/projects">
            <Container>
              <Divider horizontal style={{ fontSize: '2.6em', marginBottom: '24px' }}>
                2020
                </Divider>
              <Responsive as={SnakeCard} mobile={true} {...Responsive.onlyMobile} />
              <Responsive as={SnakeCard} mobile={false} minWidth={Responsive.onlyTablet.minWidth} />
              <Responsive as={WateringCard} mobile={true} {...Responsive.onlyMobile} />
              <Responsive as={WateringCard} mobile={false} minWidth={Responsive.onlyTablet.minWidth} />
              <Divider horizontal style={{ fontSize: '2.6em', marginBottom: '24px' }}>
                2019
                </Divider>
              <Responsive as={BotCard} mobile={true} {...Responsive.onlyMobile} />
              <Responsive as={BotCard} mobile={false} minWidth={Responsive.onlyTablet.minWidth} />
              <Responsive as={AndroidAppCard} mobile={true} {...Responsive.onlyMobile} />
              <Responsive as={AndroidAppCard} mobile={false} minWidth={Responsive.onlyTablet.minWidth} />
            </Container>
          </Route>
          <Route exact path="/en/cert">
            <Certificates />
          </Route>
        </Segment>
      </Segment.Group>
    </div>
  );
}
export default SiteEN;
