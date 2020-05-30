import React, { useState } from 'react'
import { Segment, Popup, Header, Transition, Embed,  Icon } from 'semantic-ui-react';
import thumbnail from "../images/thumbnail-min.jpg"
const WateringCard = ({ mobile }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Segment.Group raised style={{ marginBottom: '35px' }} onClick={() => { setExpanded(!expanded) }} >
      <Segment style={{ padding: 0 }}>
        <Embed
          id="GPbA5ufYR2Q"
          source="youtube"
          placeholder={thumbnail}
        />
      </Segment>
      <Popup
        content={expanded ? 'Нажмите, чтобы скрыть ссылки' : 'Нажмите, чтобы показать ссылки'}
        trigger={
          <Segment>
            <Header style={{ fontSize: mobile ? '1.4em' : '1.6em' }}>Автоматический полив для домашнего растения</Header>
            <p style={{ fontSize: mobile ? '1.3em' : '1.4em', marginTop: '-10px', marginBottom: '0px' }}>Во время карантина, чтобы не сойти с ума, я решил построить систему автополива для флоксов на базе Arduino. Выше есть подробное видео-описание процесса.</p>
            <Transition visible={mobile && !expanded} duration="10" >
              <p style={{ marginBottom: 0, marginTop: '5px' }}>Нажмите, чтобы показать ссылки...</p>
            </Transition>
            <Transition visible={expanded}>
              <div style={{ marginTop: '10px' }}>
                <a href="https://github.com/bfrolikov/Automatic-Watering" title="Страница на GitHub">
                  <Icon name="github" size='huge' style={{ color: 'black' }} />
                </a>
              </div>
            </Transition>
          </Segment>
        }
        position="bottom center"
        style={{ fontSize: '1.2em' }}
      />

    </Segment.Group>

  );
}
export default WateringCard;