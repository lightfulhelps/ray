import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Card from './Card';

import '../../../scss/ray.scss';

const stories = storiesOf('Card', module);

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

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Card color={select('Theme', themes)} outline={boolean('Outline', false)}>
    {text('Text', 'Child content')}
  </Card>
));
