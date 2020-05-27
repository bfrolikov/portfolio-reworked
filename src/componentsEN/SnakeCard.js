import React, { useState, useEffect } from 'react'
import { Segment, Popup, Header, Transition, Button, Container } from 'semantic-ui-react';
import projectsEN from '../objects/projectStringsEN';
import '../snake.css';
const SnakeCard = () => {
    const [expanded, setExpanded] = useState(false);
    const loadScript = () => {
        const script = document.createElement('script');
        script.src = `${process.env.PUBLIC_URL}/snake.js`;
        script.async = true;
        document.body.appendChild(script);
    }
    useEffect(loadScript, [])// 7300e6-> #b64dce 
    return (
        <Segment.Group raised style={{ marginBottom: '65px' }} onClick={() => { setExpanded(!expanded) }} >
            <Segment style={{background:'linear-gradient(#751aff,#8c1aff)'}}>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <div id="game-area" >
                        <h1 id="you-lose">You lose</h1>
                    </div>
                </Container>
            </Segment>
            <Segment >
                <div style={{ display: 'flex' }}>
                    <div>
                        <Header style={{ fontSize: '1.6em' }}>{projectsEN.snake.projectName}</Header>
                        <p style={{ fontSize: '1.4em', marginTop: '-10px', marginBottom: '0px' }}>{projectsEN.snake.description}</p>
                    </div>
                    <Button primary style={{ marginLeft: '9px', alignSelf: 'center' }}>Full Version{/*Replace with links*/}</Button>
                </div>
                <Transition visible={expanded}>
                    <p style={{ fontSize: '1.4em' }}> <a href="https://codepen.io/bfrolikov/pen/xxwOQQJ">Source code</a></p>
                </Transition>
            </Segment>
        </Segment.Group>
    );
}
export default SnakeCard;