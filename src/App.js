import React, { useState } from 'react';
import './App.css';
import PhotoAndStory from './components/PhotoAndStory'
import { Segment, Menu, Container} from 'semantic-ui-react';

const App = () => {
  const [activeItem, setActiveItem] = useState('home');
  return (
    <div className="App">
      <Segment.Group>
        <Segment inverted textAlign='center'>
          <Container style={{width:'80%'}}>
            <Menu inverted secondary style={{fontSize:'1.25em' }}>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={() => setActiveItem('home')}>
                Home
              </Menu.Item>
              <Menu.Item name='projects' active={activeItem === 'projects'} onClick={() => setActiveItem('projects')}>
                Projects
              </Menu.Item>
            </Menu>
            <PhotoAndStory />
            {/*conditional rendering here */}
          </Container>
        </Segment>
        <Segment >
          {/*conditional rendering here */}
        </Segment>
      </Segment.Group>
    </div>
  );
}
export default App;
