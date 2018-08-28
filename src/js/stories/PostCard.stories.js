import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, date, color, select } from '@storybook/addon-knobs';
import { Container, Row, Col, PostCard } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('PostCard', module);
const defaultDate = new Date();
const socialProviders = {
  twitter: 'Twitter',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
};

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">PostCard.</h1>
    <Row>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard
          title={text('Title', 'Hope For Children')}
          date={date('Date', defaultDate)}
          campaign={{
            name: text('Campaign Name', 'Campaign Tag'),
            color: color('Campaign Color', '#27B0CC'),
          }}
          avatarUrl={text('Avatar URL', 'https://randomuser.me/api/portraits/women/47.jpg')}
          socialProvider={select('Social Provider', socialProviders, 'twitter')}
          content={text(
            'Content',
            'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".'
          )}
          inspirationActions={[
            {
              icon: 'follow',
              activeColor: '#0095f1',
              isActive: boolean('Following', true),
              onClick: action('Follow'),
            },
            {
              icon: 'like',
              activeColor: '#f25270',
              isActive: boolean('Liked', true),
              onClick: action('Like'),
            },
            { icon: 'reply', isActive: false },
            { icon: 'repost', isActive: false },
            { icon: 'edit', isActive: false },
          ]}
          isDraft={boolean('Draft', false)}
          isInvalid={boolean('Invalid', false)}
        />
      </Col>
    </Row>
  </Container>
));
