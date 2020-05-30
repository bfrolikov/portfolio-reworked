import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { Segment, Container, Button, Divider, Responsive } from 'semantic-ui-react';
import PhotoAndStory from './componentsRU/PhotoAndStory'
import PageMenu from './componentsRU/PageMenu';
import Experience from './componentsRU/Experience';
import Certificates from './componentsRU/Certificates';
import PCMobileResponsive from './PCMobileResponsive';
import SnakeCard from './componentsRU/SnakeCard';
import SnakeCardMobile from './componentsRU/SnakeCardMobile';
import BotCard from './componentsRU/BotCard';
import AndroidAppCard from './componentsRU/AndroidAppCard';
import WateringCard from './componentsRU/WateringCard';
import cards from './objects/cardsRU';
const SiteRU = () => {
  const [rowsShown, setRowsShown] = useState(1);
  return (
    <div>
      <Segment.Group style={{ border: '0px' }}>
        <Segment inverted textAlign='center'>
          <Container style={{}}>
            <PageMenu />
            <Route exact path="/">
              <PhotoAndStory />
            </Route>
          </Container>
        </Segment>
        <Segment >
          <Route exact path="/">
            <Experience rowsShown={rowsShown} />
            <Container textAlign='center'>
              <Button style={{ marginTop: '25px' }}
                onClick={() => setRowsShown(rowsShown + 1)}
                disabled={rowsShown >= cards.length}
                primary
              >
                Показать больше
              </Button>
            </Container>
          </Route>
          <Route exact path="/projects">
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
          <Route exact path="/cert">
            <PCMobileResponsive as={Certificates} />
          </Route>
        </Segment>
      </Segment.Group>
    </div>
  );
}
export default SiteRU;
