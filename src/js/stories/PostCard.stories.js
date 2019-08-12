import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, date, color, select } from '@storybook/addon-knobs';
import { Container, PostCard } from '..';

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
  // {
  //   type: 'image',
  //   url:
  //     'https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6fc9d727accaab5052cd754f634e768&auto=format&fit=crop&w=2251&q=80',
  // },
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
      displayName: 'Save the rabbits',
    },
    content: text(
      'Content',
      'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".'
    ),
    media,
    metrics: {
      likes: 12,
      comments: 30,
      shares: 69,
      clicks: 30,
    },
    state: 'scheduled',
    tags,
  },
  actions: [
    { label: 'Edit', onClick: action('Edit') },
    { label: 'Delete', onClick: action('Delete') },
    { label: 'Preview', onClick: action('Preview') },
    { label: 'Reschedule', onClick: action('Reschedule') },
  ],
  isDraft: boolean('Draft', false),
  isInvalid: boolean('Invalid', false),
  // metaPreview: {
  //   title: text('Meta Title', "National Living Wage 'fails to cover families' basic needs"),
  //   description: text(
  //     'Meta Description',
  //     "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says."
  //   ),
  //   image: text(
  //     'Meta Image',
  //     'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg'
  //   ),
  //   url: text('Meta URL', 'https://www.bbc.co.uk/news/business-45242008'),
  // },
  errors: [
    'Error string',
    'Error string two with a much longer string than the other one',
    'Error string two with a much longer string than the other one kinda long',
    'Error string two with a much longer string than the other one much much longer its long',
  ],
};

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">PostCard</h1>
    <PostCard className="mb-4" {...scheduledPost} />
    <PostCard className="mb-4" {...scheduledPost} />
    <PostCard className="mb-4" {...scheduledPost} />
  </Container>
));
