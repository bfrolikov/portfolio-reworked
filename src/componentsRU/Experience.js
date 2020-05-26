import React from 'react';
import { Container, Divider, Grid, Transition } from 'semantic-ui-react';
import ExperienceCard from './ExperienceCard';
import cards from '../objects/cardsRU';

const Experience = ({rowsShown}) => {
    return (
        <div>
            <Divider horizontal style={{ fontSize: '2.5em',marginBottom:'25px' }}>технологии, которые я использую</Divider>
            <Container>
                <Transition.Group
                as = {Grid}
                duration={200}
                columns={4}
                relaxed stackable
                >
                    {
                        cards.slice(0,rowsShown).map((rowItem,index)=>(
                            <Grid.Row key={index}> {/*It's an antipattern, but I think it should work here*/}
                                {
                                    rowItem.map((cardItem)=>(
                                        <Grid.Column key={cardItem.id}>
                                            <ExperienceCard {...cardItem} />
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