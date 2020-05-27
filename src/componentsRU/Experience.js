import React from 'react';
import { Container, Divider, Grid, Transition, Responsive } from 'semantic-ui-react';
import ExperienceCard from './ExperienceCard';
import cards from '../objects/cardsRU';

const Experience = ({ rowsShown }) => {
    const columnStyleMobile = { display: 'flex', justifyContent: 'center' };
    return (
        <div>
            <Responsive as={Divider} horizontal style={{ fontSize: '2.5em', marginBottom: '25px' }} minWidth={Responsive.onlyTablet.minWidth}>
                технологии, которые я использую
            </Responsive>
            <Responsive as={Divider} horizontal style={{ fontSize: '1.6em', marginBottom: '25px' }} {...Responsive.onlyMobile}>
                технологии,<br/> которые я использую
            </Responsive>
            <Responsive as={Container} minWidth={Responsive.onlyTablet.minWidth}>
                <Transition.Group
                    as={Grid}
                    duration={200}
                    columns={4}
                    relaxed stackable
                >
                    {
                        cards.slice(0, rowsShown).map((rowItem) => (
                            <Grid.Row key={rowItem.id}>
                                {
                                    rowItem.map((cardItem) => (
                                        
                                            <Grid.Column key={cardItem.id}>
                                                <ExperienceCard {...cardItem} />
                                            </Grid.Column>
                                        
                                    ))
                                }
                            </Grid.Row>
                        ))
                    }
                </Transition.Group>
            </Responsive>
            <Responsive as={Container} {...Responsive.onlyMobile}>
                <Transition.Group
                    as={Grid}
                    duration={200}
                    columns={4}
                    relaxed stackable
                >
                    {
                        cards.slice(0, rowsShown).map((rowItem) => (
                            <Grid.Row key={rowItem.id}>
                                {
                                    rowItem.map((cardItem) => (
                                        
                                            <Grid.Column key={cardItem.id} style={columnStyleMobile}>
                                                <ExperienceCard {...cardItem} />
                                            </Grid.Column>
                                        
                                    ))
                                }
                            </Grid.Row>
                        ))
                    }
                </Transition.Group>
            </Responsive>
        </div>
    )
}
export default Experience;