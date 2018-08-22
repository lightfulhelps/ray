import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, date, color } from '@storybook/addon-knobs';
import { Container, Row, PostCard, PostContent, PostHeader } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('PostCard', module);
const defaultDate = new Date();

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">PostCard.</h1>
    <Row>
      <div className="col-md-6 col-lg-4 mb-2">
        <PostCard isDraft={boolean('Draft', false)} isInvalid={boolean('Invalid', false)}>
          <PostHeader
            title={text('Title', 'Hope For Children')}
            date={date('Date', defaultDate)}
            campaign={{
              name: text('Campaign Name', 'Campaign Tag'),
              color: color('Campaign Color', '#27B0CC'),
            }}
          />
          <PostContent>
            {text(
              'Content',
              'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".'
            )}
          </PostContent>
        </PostCard>
      </div>
    </Row>
  </Container>
));
