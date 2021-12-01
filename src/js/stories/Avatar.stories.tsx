import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Container, Row, Col, Avatar } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Avatar', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Avatar</h1>
    <Row>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar name={text('Name', 'Lightful')} />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar url="https://randomuser.me/api/portraits/women/47.jpg" />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar url="data:image/png;base64,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" />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar url="https://randomuser.me/api/portraits/women/47.jpg" provider="facebook" />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar url="https://randomuser.me/api/portraits/women/47.jpg" provider="twitter" />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar url="https://randomuser.me/api/portraits/women/47.jpg" provider="linkedin" />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar url="https://randomuser.me/api/portraits/women/47.jpg" provider="instagram" />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar
          url="https://randomuser.me/api/portraits/women/47.jpg"
          provider="tick"
          providerSize="sm"
        />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar
          url="https://randomuser.me/api/portraits/women/47.jpg"
          provider="linkedin"
          isDisconnected
        />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar
          url="https://randomuser.me/api/portraits/women/47.jpg"
          providerSize="lg"
          provider="linkedin"
        />
      </Col>
      <Col xs={3} sm={2} md={1} className="mb-2">
        <Avatar
          url="https://randomuser.me/api/portraits/women/47.jpg"
          providerSize="sm"
          provider="linkedin"
        />
      </Col>
    </Row>
  </Container>
));
