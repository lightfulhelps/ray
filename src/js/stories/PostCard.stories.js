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

    <PostCard
      editButtonOnClick={() => null}
      postContent={{
        content: 'some kind of content',
        externalConnection: {
          provider: 'FACEBOOK',
          avatar:
            'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/67415422_1274928982687962_3508840611266428928_n.png?_nc_cat=103&_nc_oc=AQntpAFnVBYKwd5xMyw15cdB5p2Pdzqfz_vSpdKMBG5Z57mthkamLLJEFhN_fdlr-0M&_nc_ht=scontent.xx&oh=e92e59ebde2591ea5fa72107e00356f9&oe=5DA94D63',
        },
        media: {
          nodes: [
            {
              mediaByMediaId: {
                url:
                  'https://images.unsplash.com/photo-1547836291-f794e30d524a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMzM1fQ',
              },
            },
          ],
        },
        post: { user: { displayName: 'Usey McUser' } },
      }}
      postType="scheduled"
    />
  </Container>
));
