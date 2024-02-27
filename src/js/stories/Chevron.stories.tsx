import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Container, Row, Col, Chevron } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Chevron', module);

stories.addDecorator(withKnobs);

const directions = {
  Left: 'left',
  Right: 'right',
  Up: 'up',
  Down: 'down',
} as const;

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Chevron</h1>
    <Row>
      <Col>
        <Chevron
          onClick={() => console.log('click')}
          direction={select('direction', directions, 'left')}
        />
      </Col>
    </Row>
  </Container>
));
