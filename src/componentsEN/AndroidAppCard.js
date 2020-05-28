import React, { useState } from 'react'
import { Segment, Popup, Header, Transition } from 'semantic-ui-react';
const AndroidAppCard = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Popup
            content={expanded ?'Click for less information' : 'Click for more information'}
            trigger={
                <Segment.Group raised style={{ marginBottom: '65px' }} onClick={() => { setExpanded(!expanded) }} >
                    <Segment>
                        <Header style={{ fontSize: '1.6em' }}>An Android app for tourists</Header>
                        <p style={{ fontSize: '1.4em', marginTop: '-10px',marginBottom:'0px' }}>As a finals project for Samsung's IT School I created an app that helps city dwellers to self-organise excursions for tourists. More info on on the GitHub repository page.</p>
                        <Transition visible={expanded}>
                            <p style={{ fontSize: '1.4em'}}> ses</p>
                        </Transition>
                    </Segment>
                </Segment.Group>
            }
            position="bottom center"
            style={{ fontSize: '1.1em' }}

        />
    );
}
export default AndroidAppCard;