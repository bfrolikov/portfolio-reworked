import React from 'react'
import { Card, Image } from 'semantic-ui-react';
const ExperienceCard = ({ src, techName, experience }) => (
    <Card raised style={{width:'250px', height : '325px'}}>
        <Image src={src} />
        <Card.Content>
            <Card.Header>{techName}</Card.Header>
            <Card.Description>Experience: {experience}</Card.Description>
        </Card.Content>
    </Card>
)

export default ExperienceCard;