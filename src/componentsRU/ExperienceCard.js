import React from 'react'
import { Card, Image } from 'semantic-ui-react';
const ExperienceCard = ({ src, techName, experience }) => (
    <Card raised style={{minHeight:'247px'}}>
        <Image src={src} />
        <Card.Content>
            <Card.Header>{techName}</Card.Header>
            <Card.Description>Опыт использования: {experience}</Card.Description>
        </Card.Content>
    </Card>
)

export default ExperienceCard;