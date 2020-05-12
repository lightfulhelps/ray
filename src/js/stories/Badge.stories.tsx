import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col, Badge } from '../';
import themes from './utils/themes';

import '../../scss/ray.scss';

const stories = storiesOf('Badge', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Badge</h1>
    <Row>
      <Col>
        <Badge isOutline={boolean('Outline', false)} theme={select('Theme', themes, 'primary')}>
          Hello
        </Badge>
      </Col>
    </Row>
  </Container>
));
