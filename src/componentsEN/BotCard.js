import React, { useState } from 'react'
import { Segment, Popup, Header, Transition, Image, Icon } from 'semantic-ui-react';
import botThumbnail from '../images/botThumbnail.jpg'
const BotCard = ({ mobile }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Popup
            content={expanded ? 'Click to hide links' : 'Click to show links'}
            trigger={
                <Segment.Group raised style={{ marginBottom: '35px' }} onClick={() => { setExpanded(!expanded) }} >
                    <Segment style={{ padding: 0 }}>
                        <Image src={botThumbnail} style={{ width: '100%', height: 'auto' }} />
                    </Segment>
                    <Segment>
                        <Header style={{ fontSize: mobile ? '1.4em' : '1.6em' }}>Calculator bot</Header>
                        <p style={{ fontSize: mobile ? '1.3em' : '1.4em', marginTop: '-10px', marginBottom: '0px' }}>A highschooler friend asked me to build a VK bot to help him with his geometry lessons. Every lesson they were given small tests in which they had to manually calculate certain properties of given geometric objects. And since the tests were automatically generated, I build a chat bot in <em>Node.js</em> to handle these calculations. Works great to this day.</p>
                        <Transition visible={mobile && !expanded} duration="10" >
                            <p style={{ marginBottom: 0, marginTop: '5px' }}>Click to show links...</p>
                        </Transition>
                        <Transition visible={expanded}>
                            <div style={{ marginTop: '10px' }}>
                                <a href="https://github.com/bfrolikov/ubot" title="GitHub page">
                                    <Icon name="github" size='huge' style={{ color: 'black' }} />
                                </a>
                                <a href="https://vk.com/shkafal" title="VK group with the bot">
                                    <Icon name="vk" size='huge' style={{ color: 'black' }} />
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
export default BotCard;