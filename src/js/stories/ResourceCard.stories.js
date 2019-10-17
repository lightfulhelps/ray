import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Container, Row, Col, ResourceCard } from '../';
import themes from './utils/themes';

import '../../scss/ray.scss';

const stories = storiesOf('ResourceCard', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">ResourceCard</h1>
    <Row>
      <Col>
        <ResourceCard
          title="Social media toolkit for charities"
          campaign="Fireside Storytelling"
          resource=""
        />
      </Col>
      <Col>
        <ResourceCard
          title="Social media toolkit for charities"
          campaign="Fireside Storytelling"
          resource=""
        />
      </Col>
      <Col>
        <ResourceCard
          title="Social media toolkit for charities"
          campaign="Fireside Storytelling"
          resource="http://google.com"
        />
      </Col>
      <Col>
        <ResourceCard
          title="#GivingTueday logo and asset"
          campaign="Giving Tuesday"
          gradientStart="#972F53"
          gradientEnd="#10287A"
          resource=""
        />
      </Col>
      <Col>
        <ResourceCard
          title="How can you give as a charity"
          campaign="Giving Tuesday"
          gradientStart="#972F53"
          gradientEnd="#10287A"
          resource=""
        />
      </Col>
      <Col>
        <ResourceCard
          title="How can you give as a charity"
          campaign="Giving Tuesday"
          gradientStart="#972F53"
          gradientEnd="#10287A"
          resource=""
        />
      </Col>
    </Row>
  </Container>
));
