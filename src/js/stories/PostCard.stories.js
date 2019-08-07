import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, date, color, select } from '@storybook/addon-knobs';
import {
  Container,
  Row,
  Col,
  InspirationPostCard,
  PostCard,
  InspirationPostCardGhost,
  Button,
} from '..';

import '../../scss/ray.scss';

const stories = storiesOf('PostCard', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">New InspirationPostCard.</h1>
    <Row>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...scheduledPost} errors={[]} />
      </Col>
    </Row>
  </Container>
));
