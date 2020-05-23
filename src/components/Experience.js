import React, { useState } from 'react';
import { Container, Divider, Grid, Transition } from 'semantic-ui-react';
import ExperienceCard from './ExperienceCard';
import cards from '../objects/cards';

const Experience = ({rowsShown}) => {
    
    return (
        <div>
            <Divider horizontal style={{ fontSize: '2.5em' }}>technologies that I use</Divider>
            <Container>
                <Transition.Group
                as = {Grid}
                duration={200}
                columns={4}
                relaxed stackable
                >
                    {
                        cards.slice(0,rowsShown).map((rowItem)=>(
                            <Grid.Row>
                                {
                                    rowItem.map((cardItem)=>(
                                        <Grid.Column>
                                            <ExperienceCard {...cardItem}/>
                                        </Grid.Column>
                                    ))
                                }
                            </Grid.Row>
                        ))
                    }
                </Transition.Group>
            </Container>
        </div>
    )
}
export default Experience;