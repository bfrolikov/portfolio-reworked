import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { Segment, Container, Button, Responsive} from 'semantic-ui-react';
import PhotoAndStory from './componentsRU/PhotoAndStory'
import PageMenu from './componentsRU/PageMenu';
import Experience from './componentsRU/Experience';
import ExperienceMobile from './componentsRU/ExperienceMobile';
import ProjectCard from './componentsRU/ProjectCard';
import cards from './objects/cardsRU';
import projects from './objects/projectStringsRU';
const SiteRU = () => {
  const [rowsShown, setRowsShown] = useState(1);
  return (
    <div>
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
                  Показать больше
              </Button>
              </Container>
            </Route>
            <Route exact path="/projects">
              <Container >
                <ProjectCard {...projects.example}>
                  <Container style={{display:'flex',justifyContent:'center'}}>
                    <div style={{ width: '600px', height: '600px', background: 'black' }}>

                    </div>
                  </Container>
                </ProjectCard>
              </Container>
            </Route>
          </Segment>
        </Segment.Group>
    </div>
  );
}
export default SiteRU;
