import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Container, Row, PostCard } from '../../';

import '../../../scss/ray.scss';

const stories = storiesOf('PostCard', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1>PostCard.</h1>
    <Row>
      <div className="col-4">
        <PostCard isDraft={boolean('Draft', false)} isInvalid={boolean('Invalid', false)} />
      </div>
      <div className="col-4">
        <PostCard isDraft={boolean('Draft', false)} isInvalid={boolean('Invalid', false)} />
      </div>
      <div className="col-4">
        <PostCard isDraft={boolean('Draft', false)} isInvalid={boolean('Invalid', false)} />
      </div>
    </Row>
  </Container>
));
