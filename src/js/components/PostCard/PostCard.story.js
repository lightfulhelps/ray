import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, PostCard } from '../../';

import '../../../scss/ray.scss';

const stories = storiesOf('PostCard', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <Row>
      <div className="col-6">
        <PostCard />
      </div>
    </Row>
  </Container>
));
