import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Container, Row, Col, Alert } from '../';
import themes from './utils/themes';

import '../../scss/ray.scss';

const stories = storiesOf('Alert', module);

stories.addDecorator(withKnobs);
stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Alert</h1>
    <Row>
      <Col>
        <Alert
          className="mb-3"
          theme={select('Theme', themes, 'success')}
          hideIcon={boolean('Hide Icon', false)}
        >
          A simple alert—check it out!
        </Alert>
        <Alert
          theme={select('Theme', themes, 'success')}
          header="Well done!"
          hideIcon={boolean('Hide Icon', false)}
        >
          An alert with a heading!
        </Alert>
      </Col>
    </Row>
  </Container>
));
