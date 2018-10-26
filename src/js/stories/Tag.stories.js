import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Container, Row, Col, Tag } from '../';
import themes from './utils/themes';

import '../../scss/ray.scss';

const stories = storiesOf('Tag', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Tag.</h1>
    <Row>
      <Col>
        <h2 className="h4 mb-2">Default.</h2>
        <Tag theme={select('Theme', themes, 'dark')}>{text('Text', 'Social For Good')}</Tag>
      </Col>
      <Col>
        <h2 className="h4 mb-2">With Remove.</h2>
        <Tag theme={select('Theme', themes, 'dark')} onRemove={action('Remove')}>
          {text('Text', 'Social For Good')}
        </Tag>
      </Col>
    </Row>
  </Container>
));
