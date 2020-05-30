import React from 'react'
import { Segment, Header, Button, Container } from 'semantic-ui-react';
import useSnake from '../hooks/useSnake';
import '../snake.css';


const SnakeCard = ({mobile}) => {
    let started = false;
    const setInitialVelocity = useSnake(); 
    return (
        <Segment.Group raised style={{ marginBottom: '35px' }}>
            <Segment style={{ background: 'linear-gradient(#751aff,#8c1aff)' }}>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <div id="game-area" >
                        <h1 id="you-lose">You lose</h1>
                    </div>
                </Container>
            </Segment>
            <Segment >
                <div style={{ display: 'flex' ,justifyContent:'space-between'}}>
                    <div>
                        <Header style={{ fontSize: mobile?'1.4em':'1.6em' }}>Змейка на чистом JavaScript</Header>
                        <p style={{ fontSize: mobile?'1.3em':'1.4em', marginTop: '-10px', marginBottom: '0px' }}>Ради интереса написал змейку на стандарном JavaScript. &nbsp; 
                         <em>WASD</em> - движение, <em>Ctrl</em> - перезапустить.</p>
                    </div>
                    <Button primary style={{ alignSelf: 'center',fontSize:'1.25em' }} onClick={()=>{if(!started) {setInitialVelocity();started=true;} }}>Играть</Button>
                </div>
            </Segment>
        </Segment.Group>
    );
}
export default SnakeCard;