import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col, Button } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Button', module);

const themes = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
  light: 'Light',
  dark: 'Dark',
};
const positions = {
  left: 'left',
  right: 'right',
  noIcon: 'no icon',
}
const icons = {
  noIcon: 'no icon',
  addMedia: 'addMedia',
  addSchedule: 'addSchedule',
  analytics: 'analytics',
  comment: 'comment',
  create: 'create',
  dashboard: 'dashboard',
  delete: 'delete',
  edit: 'edit',
  exit: 'exit',
  facebook: 'facebook',
  follow: 'follow',
  fundraising: 'fundraising',
  helpChat: 'helpChat',
  inspiration: 'inspiration',
  like: 'like',
  linkedin: 'linkedin',
  mediaLibrary: 'mediaLibrary',
  menu: 'menu',
  multipleSocialProvider: 'multipleSocialProvider',
  notifications: 'notifications',
  organisationAccount: 'organisationAccount',
  organisation: 'organisation',
  personalAccount: 'personalAccount',
  play: 'play',
  posts: 'posts',
  previewPost: 'previewPost',
  reply: 'reply',
  repost: 'repost',
  settings: 'settings',
  signOut: 'signOut',
  storyBuilder: 'storyBuilder',
  twitter: 'twitter',
  unscheduled: 'unscheduled',
}

const sizes = {
  lg: 'Large',
  md: 'Medium',
  sm: 'Small',
};

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Button.</h1>
    <Row>
      <Col xs={6}>
        <Button
          color={select('Theme', themes, 'primary')}
          isBlock={boolean('Block', false)}
          isDisabled={boolean('Disabled', false)}
          isOutline={boolean('Outline', false)}
          onClick={action('clicked')}
          size={select('Size', sizes, 'md')}
          icon={select('Icon', icons, false)}
          iconPosition={select('Position', positions, false)}
        >
          {text('Text', 'Click Me')}
        </Button>
      </Col>
    </Row>
  </Container>
));
