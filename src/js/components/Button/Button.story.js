import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Button from './Button';

import '../../../scss/ray.scss';

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

const sizes = {
  lg: 'Large',
  md: 'Medium',
  sm: 'Small',
};

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Button
    onClick={action('clicked')}
    color={select('Theme', themes, 'primary')}
    outline={boolean('Outline', false)}
    disabled={boolean('Disabled', false)}
    size={select('Size', sizes, 'md')}
  >
    {text('Text', 'Click Me')}
  </Button>
));
