import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, date, color, select } from '@storybook/addon-knobs';
import { Container, Row, Col, PostCard, PostCardGhost, Button } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('PostCard', module);
const defaultDate = new Date();

const socialProviders = {
  twitter: 'Twitter',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
};

const media = [
  {
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80',
  },
  {
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80',
  },
  {
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4c057ea9163ee6155a71e04dc58dfa5&auto=format&fit=crop&w=2250&q=80',
  },
  {
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6fc9d727accaab5052cd754f634e768&auto=format&fit=crop&w=2251&q=80',
  },
];

const tags = ['Social For Good', 'Charity', 'Lightful', 'Giving', 'Tech For Good'];

const scheduledPost = {
  post: {
    title: text('Title', 'Hope For Children'),
    date: date('Date', defaultDate),
    campaign: {
      name: text('Campaign Name', 'Campaign Tag'),
      color: color('Campaign Color', '#27B0CC'),
    },
    creator: 'Bruno La Versa',
    socialIdentity: {
      id: '123',
      avatar: text('Avatar URL', 'https://randomuser.me/api/portraits/women/47.jpg'),
      provider: select('Social Provider', socialProviders, 'twitter'),
    },
    content: text(
      'Content',
      'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".'
    ),
    tags,
    metrics: {
      likes: 12,
      comments: 30,
      shares: 69,
      clicks: 30,
    },
  },
  actions: [
    { icon: 'edit', label: 'Edit', onClick: action('Edit') },
    { icon: 'delete', label: 'Delete', onClick: action('Delete') },
  ],
  isDraft: boolean('Draft', false),
  isInvalid: boolean('Invalid', false),
  metaPreview: {
    title: text('Meta Title', "National Living Wage 'fails to cover families' basic needs"),
    description: text(
      'Meta Description',
      "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says."
    ),
    image: text(
      'Meta Image',
      'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg'
    ),
    url: text('Meta URL', 'https://www.bbc.co.uk/news/business-45242008'),
  },
};

const approvalQueuePost = {
  post: {
    title: text('Title', 'Hope For Children'),
    campaign: {
      name: text('Campaign Name', 'Campaign Tag'),
      color: color('Campaign Color', '#27B0CC'),
    },
    creator: 'Bruno La Versa',
    socialIdentity: {
      id: '123',
      avatar: text('Avatar URL', 'https://randomuser.me/api/portraits/women/47.jpg'),
      provider: select('Social Provider', socialProviders, 'twitter'),
    },
    content: text(
      'Content',
      'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".'
    ),
    tags,
  },
  actions: [
    { icon: 'edit', label: 'Edit', onClick: action('Edit') },
    { icon: 'delete', label: 'Delete', onClick: action('Delete') },
  ],
  isDraft: boolean('Draft', false),
  isInvalid: boolean('Invalid', false),
  metaPreview: {
    title: text('Meta Title', "National Living Wage 'fails to cover families' basic needs"),
    description: text(
      'Meta Description',
      "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says."
    ),
    image: text(
      'Meta Image',
      'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg'
    ),
    url: text('Meta URL', 'https://www.bbc.co.uk/news/business-45242008'),
  },
  footerButton: <Button onClick={action('Approve')}>Approve Post</Button>,
};

const inspirationPost = {
  post: {
    title: text('Title', 'Hope For Children'),
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
  },
  inspirationActions: [
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
    { icon: 'repost', isActive: false, theme: 'gray-500' },
    { icon: 'reply', isActive: false, theme: 'gray-500' },
    { icon: 'create', isActive: false, theme: 'gray-500' },
  ],
  isDraft: boolean('Draft', false),
  isInvalid: boolean('Invalid', false),
};

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">PostCard.</h1>
    <Row>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...scheduledPost} />
      </Col>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...scheduledPost} />
      </Col>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...scheduledPost} />
      </Col>
    </Row>
  </Container>
));

stories.add('With Approval Button', () => (
  <Container>
    <h1 className="my-4">PostCard.</h1>
    <Row>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...approvalQueuePost} />
      </Col>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...approvalQueuePost} />
      </Col>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...approvalQueuePost} />
      </Col>
    </Row>
  </Container>
));

stories.add('With Action Icons', () => (
  <Container>
    <h1 className="my-4">PostCard.</h1>
    <Row>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...inspirationPost} />
      </Col>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...inspirationPost} />
      </Col>
      <Col className="mb-2" md={6} lg={4}>
        <PostCard {...inspirationPost} />
      </Col>
    </Row>
  </Container>
));

stories.add('Ghost', () => (
  <Container>
    <h1 className="my-4">PostCardGhost.</h1>
    <Row>
      <Col className="mb-2" md={6} lg={4}>
        <PostCardGhost />
      </Col>
      <Col className="mb-2" md={6} lg={4}>
        <PostCardGhost />
      </Col>
      <Col className="mb-2" md={6} lg={4}>
        <PostCardGhost />
      </Col>
    </Row>
  </Container>
));
