import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Container, Row, PostCard } from '../../';

import '../../../scss/ray.scss';

const stories = storiesOf('PostCard', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1>PostCard.</h1>
    <Row>
      <div className="col-md-6 col-lg-4 mb-2">
        <PostCard
          content={text(
            'Content',
            'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".'
          )}
          isDraft={boolean('Draft', false)}
          isInvalid={boolean('Invalid', false)}
        />
      </div>
    </Row>
  </Container>
));
