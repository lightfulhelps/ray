import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, date, select, color } from '@storybook/addon-knobs';
import { Container, PostCard } from '..';
import { MediaType } from '../components/PostCard/PostCard';

import '../../scss/ray.scss';

const stories = storiesOf('PostCard', module);
const defaultDate = new Date();

const socialProviders = {
  Twitter: 'twitter',
  Facebook: 'facebook',
  Linkedin: 'linkedin',
} as const;

const media: MediaType[] = [
  {
    id: 'df92684f-1896-475e-bb3a-0a125f933504',
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80',
  },
  {
    id: '47bee1ed-aca4-482b-a17f-70060643cc7f',
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80',
  },
  {
    id: '53d4e7a0-fbcc-42e1-a3f6-5f0f1a75d693',
    type: 'image',
    url:
      'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4c057ea9163ee6155a71e04dc58dfa5&auto=format&fit=crop&w=2250&q=80',
  },
];

const tags = ['Social For Good', 'Charity', 'Lightful', 'Giving', 'Tech For Good'];

const states = ['scheduled', 'published', 'review'];

stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const showMeta = boolean('Show meta', true);

  return (
    <Container>
      <h1 className="my-4">PostCard</h1>
      <PostCard
        className="mb-4"
        post={{
          id: '4f20c60c-203e-454b-8953-f192911c966e',
          campaign: {
            name: text('Campaign Name', 'Wildlife'),
            color: color('Campaign Color', '#D72E85'),
          },
          date: date('Date', defaultDate),
          socialIdentity: {
            id: '123',
            avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
            provider: select('Social Provider', socialProviders, 'twitter'),
            displayName: 'Save the rabbits',
          },
          content: text(
            'Content',
            'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most". Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school.'
          ),
          media: !showMeta && media,
          metrics: [
            {
              icon: 'like',
              key: 'likes',
              value: 10,
            },
            {
              icon: 'comment',
              key: 'comments',
              value: 2,
            },
            {
              icon: 'share',
              key: 'shares',
              value: 5,
            },
            {
              icon: 'click',
              key: 'clicks',
              value: 0,
            },
          ],
          state: select('Post State', states, 'scheduled'),
          tags,
        }}
        actions={[
          { children: 'Approve', onClick: action('Approve') },
          { children: 'Preview', onClick: action('Preview') },
          { children: 'Edit', onClick: action('Edit') },
          { children: 'Delete', onClick: action('Delete') }, // { children: 'Reschedule', onClick: action('Reschedule') },
        ]}
        isDraft={boolean('Draft', false)}
        isInvalid={boolean('Invalid', false)}
        isImported={boolean('Imported', false)}
        metaPreview={
          showMeta && {
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
          }
        }
        notesAction={action('Notes')}
        notesCount={3}
        errors={
          boolean('Show errors', false) && [
            'Error string',
            'Error string two with a much longer string than the other one',
            'Error string two with a much longer string than the other one kinda long',
            'Error string two with a much longer string than the other one much much longer its long',
          ]
        }
      />
    </Container>
  );
});
