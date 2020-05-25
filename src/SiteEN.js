import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import { Segment, Container, Button, Responsive} from 'semantic-ui-react';
import PhotoAndStory from './componentsEN/PhotoAndStory'
import PageMenu from './componentsEN/PageMenu';
import Experience from './componentsEN/Experience';
import ExperienceMobile from './componentsEN/ExperienceMobile';
import ProjectCard from './componentsEN/ProjectCard';
import cards from './objects/cardsEN';
import projectsEN from './objects/projectStringsEN';
const SiteEN = () => {
  const [rowsShown, setRowsShown] = useState(1);
  return (
    <div>
      <Router>
        <Segment.Group>
          <Segment inverted textAlign='center'>
            <Container  style={{}}>
              <PageMenu />
              <Route exact path="/">
                <PhotoAndStory />
              </Route>
            </Container>
          </Segment>
          <Segment >
            <Route exact path="/">
              <Responsive as={ExperienceMobile} {...Responsive.onlyMobile} rowsShown={rowsShown} />
              <Responsive as={Experience} minWidth={Responsive.onlyTablet.minWidth} rowsShown={rowsShown} />
              <Container textAlign='center'>
                <Button style={{ marginTop: '25px' }}
                  onClick={() => setRowsShown(rowsShown + 1)}
                  disabled={rowsShown >= cards.length}
                >
                  Show More
              </Button>
              </Container>
            </Route>
            <Route exact path="/projects">
              <Container >
                <ProjectCard {...projectsEN.example}>
                  <Container style={{display:'flex',justifyContent:'center'}}>
                    <div style={{ width: '600px', height: '600px', background: 'black' }}>

                    </div>
                  </Container>
                </ProjectCard>
              </Container>
            </Route>
          </Segment>
        </Segment.Group>
      </Router>
    </div>
  );
}
export default SiteEN;
