import React from 'react'
import {Segment, Popup,Header } from 'semantic-ui-react';
const ProjectCard = ({ children, projectName, description }) => (
    <Popup
        content="Click for more information"
        trigger={
            <Segment.Group raised style={{marginTop:'65px'}}>
                {children}
                <Segment>
                    <Header style={{fontSize:'1.6em'}}>{projectName}</Header>
                    <p style={{fontSize:'1.4em',marginTop:'-10px'}}>{description}</p>
                </Segment>
            </Segment.Group>
        }
        position = "bottom center"
        style={{fontSize:'1.1em'}}
    />

)

export default ProjectCard;