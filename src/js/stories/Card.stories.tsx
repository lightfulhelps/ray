import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, Col, Card } from '../';
import '../../scss/ray.scss';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);
stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Card</h1>
    <Row>
      <Col xs={12} md={6} className="mb-2 mb-md-0">
        <Card className="p-2">
          <h2 className="mb-2">A basic card</h2>
          <p>
            This is a card. It doesn't have much styling by default but it can be modified as you
            need.
          </p>
        </Card>
      </Col>
      <Col>
        <Card className="p-2">
          <h2 className="mb-2">Another basic card</h2>
          <p>
            Urna vegan risus orci odio porta eros eros congue eget organic sodales sit amet vivamus
            commodo. Congue et molestie vim bibendum vivamus bibendum pharetra cursus vulputate
            ultricies auctor artisan diam sit quam arcu.
          </p>
        </Card>
      </Col>
    </Row>
  </Container>
));
