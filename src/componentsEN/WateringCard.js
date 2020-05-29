import React, { useState } from 'react'
import { Segment, Popup, Header, Transition, Embed, Container, Icon } from 'semantic-ui-react';
import thumbnail from "../images/thumbnail-min.jpg"
const WateringCard = ({ mobile }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Segment.Group raised style={{ marginBottom: '35px' }} onClick={() => { setExpanded(!expanded) }} >
      <Segment style={{ padding: 0 }}>
        <Embed
          id="GPbA5ufYR2Q"
          source="youtube"
          placeholder={thumbnail}
        />
      </Segment>
      <Popup
        content={expanded ? 'Click to hide links' : 'Click to show links'}
        trigger={
          <Segment>
            <Header style={{ fontSize: mobile ? '1.4em' : '1.6em' }}>Automatic watering for my houseplant</Header>
            <p style={{ fontSize: mobile ? '1.3em' : '1.4em', marginTop: '-10px', marginBottom: '0px' }}>With quarantine in effect, I decided to build an Arduino-based automatic watering system for my phlox plant to stay sane. There's a detailed video description above (only in Russian though).</p>
            <Transition visible={mobile && !expanded} duration="10" >
              <p style={{ marginBottom: 0, marginTop: '5px' }}>Click to show links...</p>
            </Transition>
            <Transition visible={expanded}>
              <div style={{ marginTop: '10px' }}>
                <a href="https://github.com/bfrolikov/Automatic-Watering" title="GitHub page">
                  <Icon name="github" size='huge' style={{ color: 'black' }} />
                </a>
              </div>
            </Transition>
          </Segment>
        }
        position="bottom center"
        style={{ fontSize: '1.2em' }}
      />

    </Segment.Group>

  );
}
export default WateringCard;