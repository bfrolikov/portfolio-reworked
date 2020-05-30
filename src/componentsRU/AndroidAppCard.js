import React, { useState } from 'react'
import { Segment, Popup, Header, Transition, Image, Icon } from 'semantic-ui-react';
import androidThumbnail from '../images/androidThumbnailAlternate.jpg'
const AndroidAppCard = ({ mobile }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Popup
            content={expanded ? 'Нажмите, чтобы скрыть ссылки' : 'Нажмите, чтобы показать ссылки'}
            trigger={
                <Segment.Group raised style={{ marginBottom: '35px' }} onClick={() => { setExpanded(!expanded) }} >
                    <Segment style={{ padding: 0 }}>
                        <Image src={androidThumbnail} style={{ width: '100%', height: 'auto' }} />
                    </Segment>

                    <Segment>
                        <Header style={{ fontSize: mobile ? '1.4em' : '1.6em' }}>Android приложение для туристов</Header>
                        <p style={{ fontSize: mobile ? '1.3em' : '1.4em', marginTop: '-10px', marginBottom: '0px' }}>Для зачетного проекта для IT Школы Samsung я написал приложение, которое позволяло горожанам самостоятельно организовывать экскурии для туристов. Больше информации на странице репозитория GitHub.</p>
                        <Transition visible={mobile && !expanded} duration="10" >
                            <p style={{ marginBottom: 0, marginTop: '5px' }}>Нажмите, чтобы показать ссылки...</p>
                        </Transition>
                        <Transition visible={expanded} >
                            <div style={{ marginTop: '10px' }}>
                                <a href="https://github.com/bfrolikov/IT_samsung_finals" title="Страница на GitHub">
                                    <Icon name="github" size='huge' style={{ color: 'black' }} />
                                </a>
                                <a href="https://docs.google.com/presentation/d/1kqScKKiUo1gq1B1RQTJYdxZ4O23toqzUzD4xfjcuaao/edit?usp=sharing" title="Презентация проекта">
                                    <Icon name="file powerpoint" size='huge' style={{ color: 'black' }} />
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
export default AndroidAppCard;