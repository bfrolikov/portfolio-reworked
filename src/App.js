import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Segment, Menu, Container } from 'semantic-ui-react';

const App = () => {
  const [activeItem, setActiveItem] = useState('home');
  return (
    <div className="App">
      <Segment.Group>
        <Segment inverted textAlign='center'>
          <Menu inverted secondary>
            <Container>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={()=>setActiveItem('home')}>
                Home
              </Menu.Item>
              <Menu.Item name='projects' active={activeItem === 'projects'} onClick={()=>setActiveItem('projects')}>
                Projects
              </Menu.Item>
            </Container>
          </Menu>
          {/*conditional rendering here */}
        </Segment>
        <Segment>
          {/*conditional rendering here */}
        </Segment>
      </Segment.Group>
    </div>
  );
}
export default App;
