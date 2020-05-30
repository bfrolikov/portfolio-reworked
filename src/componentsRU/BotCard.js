import React, { useState } from 'react'
import { Segment, Popup, Header, Transition, Image, Icon } from 'semantic-ui-react';
import botThumbnail from '../images/botThumbnail.jpg'
const BotCard = ({ mobile }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Popup
            content={expanded ? 'Нажмите, чтобы скрыть ссылки' : 'Нажмите, чтобы показать ссылки'}
            trigger={
                <Segment.Group raised style={{ marginBottom: '35px' }} onClick={() => { setExpanded(!expanded) }} >
                    <Segment style={{ padding: 0 }}>
                        <Image src={botThumbnail} style={{ width: '100%', height: 'auto' }} />
                    </Segment>
                    <Segment>
                        <Header style={{ fontSize: mobile ? '1.4em' : '1.6em' }}>Бот-Устный Счет</Header>
                        <p style={{ fontSize: mobile ? '1.3em' : '1.4em', marginTop: '-10px', marginBottom: '0px' }}>
                            Друг-учащийся 10 класса попросил меня помочь с уроками геометрии и написать бота ВКонтакте. Каждый урок им выдавали небольшие тесты, в которых надо было посчитать некоторые свойства данных геометричесих тел. И, так как тесты создавались автоматически, я сделал бота, способного выполнаять эти вычисления, с помощью <em>Node.js</em> . До сих пор прекрасно работает.
                        </p>
                        <Transition visible={mobile && !expanded} duration="10" >
                            <p style={{ marginBottom: 0, marginTop: '5px' }}>Нажмите, чтобы показать ссылки...</p>
                        </Transition>
                        <Transition visible={expanded}>
                            <div style={{ marginTop: '10px' }}>
                                <a href="https://github.com/bfrolikov/ubot" title="Страница на GitHub">
                                    <Icon name="github" size='huge' style={{ color: 'black' }} />
                                </a>
                                <a href="https://vk.com/shkafal" title="Группа Вконтакте с ботом">
                                    <Icon name="vk" size='huge' style={{ color: 'black' }} />
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
export default BotCard;