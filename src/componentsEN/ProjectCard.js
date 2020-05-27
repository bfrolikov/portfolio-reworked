import React, { useState } from 'react'
import { Segment, Popup, Header, Transition } from 'semantic-ui-react';
const ProjectCard = ({ children, projectName, description,additionalDescription }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Popup
            content={expanded ?'Click for less information' : 'Click for more information'}
            trigger={
                <Segment.Group raised style={{ marginBottom: '65px' }} onClick={() => { setExpanded(!expanded) }} >
                    {children}
                    <Segment>
                        <Header style={{ fontSize: '1.6em' }}>{projectName}</Header>
                        <p style={{ fontSize: '1.4em', marginTop: '-10px',marginBottom:'0px' }}>{description}</p>
                        <Transition visible={expanded}>
                            <p style={{ fontSize: '1.4em'}}> {additionalDescription}</p>
                        </Transition>
                    </Segment>
                </Segment.Group>
            }
            position="bottom center"
            style={{ fontSize: '1.1em' }}

        />
    );
}
export default ProjectCard;