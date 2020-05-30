import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { Segment, Container, Button, Divider, Responsive } from 'semantic-ui-react';
import PhotoAndStory from './componentsEN/PhotoAndStory'
import PageMenu from './componentsEN/PageMenu';
import Experience from './componentsEN/Experience';
import Certificates from './componentsEN/Certificates';
import PCMobileResponsive from './PCMobileResponsive';
import SnakeCard from './componentsEN/SnakeCard';
import SnakeCardMobile from './componentsEN/SnakeCardMobile';
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
              <Responsive as={SnakeCardMobile} mobile={true} {...Responsive.onlyMobile} />
              <Responsive as={SnakeCard} mobile={false} minWidth={Responsive.onlyTablet.minWidth} />
              <PCMobileResponsive as={WateringCard} />
              <Divider horizontal style={{ fontSize: '2.6em', marginBottom: '24px' }}>
                2019
                </Divider>
              <PCMobileResponsive as={BotCard} />
              <PCMobileResponsive as={AndroidAppCard} />
            </Container>
          </Route>
          <Route exact path="/en/cert">
            <PCMobileResponsive as={Certificates} />
          </Route>
        </Segment>
      </Segment.Group>
    </div>
  );
}
export default SiteEN;
