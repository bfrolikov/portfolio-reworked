import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
import { Segment, Container,Button,Responsive} from 'semantic-ui-react';
import PhotoAndStory from './components/PhotoAndStory'
import PageMenu from './components/PageMenu';
import Experience from './components/Experience';
import ExperienceMobile from './components/ExperienceMobile';
import cards from './objects/cards';
import './App.css';
const App = () => {
  const [rowsShown,setRowsShown] = useState(1);
  return (
    <div className="App">
      <Router>
        <Segment.Group>
          <Segment inverted textAlign='center'>
            <Container style={{  }}>
              <PageMenu/>
              <PhotoAndStory />
            </Container>
          </Segment>
          <Segment >
            <Responsive as={ExperienceMobile} {...Responsive.onlyMobile} rowsShown={rowsShown}/>
            <Responsive as={Experience} minWidth={Responsive.onlyTablet.minWidth} rowsShown={rowsShown}/>
            <Container textAlign='center'>
              <Button style={{marginTop:'25px'}} 
              onClick={()=>setRowsShown(rowsShown+1)}
              disabled={rowsShown >= cards.length}
              >
                Show More
              </Button>
            </Container>
          </Segment>
        </Segment.Group> 
      </Router>
    </div>
  );
}
export default App;
