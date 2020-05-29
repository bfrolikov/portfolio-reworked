import React, { useState } from 'react'
import { Segment, Popup, Header, Transition, Image, Icon } from 'semantic-ui-react';
import androidThumbnail from '../images/androidThumbnailAlternate.jpg'
const AndroidAppCard = ({ mobile }) => {
    const [expanded, setExpanded] = useState(false);
    const hide = 10;
    const show = 500;
    return (
        <Popup
            content={expanded ? 'Click to hide links' : 'Click to show links'}
            trigger={
                <Segment.Group raised style={{ marginBottom: '35px' }} onClick={() => { setExpanded(!expanded) }} >
                    <Segment style={{ padding: 0 }}>
                        <Image src={androidThumbnail} style={{ width: '100%', height: 'auto' }} />
                    </Segment>

                    <Segment>
                        <Header style={{ fontSize: mobile ? '1.4em' : '1.6em' }}>An Android app for tourists</Header>
                        <p style={{ fontSize: mobile ? '1.3em' : '1.4em', marginTop: '-10px', marginBottom: '0px' }}>As a finals project for Samsung's IT School I created an app that helps city dwellers to self-organise excursions for tourists. More info on on the GitHub repository page.</p>
                        <Transition visible={mobile && !expanded} duration="10" >
                            <p style={{ marginBottom: 0, marginTop: '5px' }}>Click to show links...</p>
                        </Transition>
                        <Transition visible={expanded} >
                            <div style={{ marginTop: '10px' }}>
                                <a href="https://github.com/bfrolikov/IT_samsung_finals" title="GitHub page">
                                    <Icon name="github" size='huge' style={{ color: 'black' }} />
                                </a>
                                <a href="https://docs.google.com/presentation/d/1kqScKKiUo1gq1B1RQTJYdxZ4O23toqzUzD4xfjcuaao/edit?usp=sharing" title="Project presentation">
                                    <Icon name="file powerpoint" size='huge' style={{ color: 'black' }} />
                                </a>
                            </div>
                        </Transition>
                    </Segment>
                </Segment.Group>
            }
            position="bottom center"
            style={{ fontSize: '1.2em' }}

        />
    );
}
export default AndroidAppCard;