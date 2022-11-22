import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, date, select } from '@storybook/addon-knobs';
import { Container, Row, Col, InspirationPostCard, PostCardGhost } from '..';

import '../../scss/ray.scss';
import translation from '../locale/i18n';

const stories = storiesOf('InspirationPostCard', module);
const defaultDate = new Date();

const socialProviders = {
  Twitter: 'twitter',
  Facebook: 'facebook',
  Linkedin: 'linkedin',
} as const;

const media = [
  {
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4c057ea9163ee6155a71e04dc58dfa5&auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6fc9d727accaab5052cd754f634e768&auto=format&fit=crop&w=600&q=80',
  },
];

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">InspirationPostCard</h1>
    <Row>
      <Col md={6}>
        <InspirationPostCard
          post={{
            id: 'fakeid123112',
            title: text('Title', translation.t('inspirationPostCard:title')),
            date: date('Date', defaultDate),
            socialIdentity: {
              id: '123',
              avatar: text('Avatar URL', 'https://randomuser.me/api/portraits/women/47.jpg'),
              provider: select('Social Provider', socialProviders, 'twitter'),
            },
            content:
              '<a href="">@Buttle UK</a> helped more than 3,000 vulnerable families buy beds for their <a href="">#children</a> last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".',
            media,
            metrics: {
              likes: 12,
              comments: 30,
              shares: 69,
              clicks: 30,
            },
            tags: [],
          }}
          inspirationActions={[
            {
              icon: 'follow',
              onClick: action('Follow'),
              theme: boolean('Following', true) ? 'primary' : 'gray-500',
            },
            {
              icon: 'like',
              onClick: action('Like'),
              theme: boolean('Like', true) ? 'primary' : 'gray-500',
            },
            {
              icon: 'repost',
              onClick: action('Repost'),
              isActive: false,
              theme: 'gray-500',
            },
            { icon: 'reply', onClick: action('Reply'), isActive: false, theme: 'gray-500' },
            { icon: 'create', onClick: action('Create'), isActive: false, theme: 'gray-500' },
          ]}
        />
      </Col>
    </Row>
  </Container>
));

stories.add('Ghost', () => (
  <Container>
    <h1 className="my-6">PostCardGhost</h1>
    <Row>
      <Col className="mb-3" md={6} lg={4}>
        <PostCardGhost />
      </Col>
      <Col className="mb-3" md={6} lg={4}>
        <PostCardGhost />
      </Col>
      <Col className="mb-3" md={6} lg={4}>
        <PostCardGhost />
      </Col>
    </Row>
  </Container>
));
