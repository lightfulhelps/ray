import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Container, Row, Button } from '../';

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
      <div className="col-6">
        <Button
          color={select('Theme', themes, 'primary')}
          isBlock={boolean('Block', false)}
          isDisabled={boolean('Disabled', false)}
          isOutline={boolean('Outline', false)}
          onClick={action('clicked')}
          size={select('Size', sizes, 'md')}
        >
          {text('Text', 'Click Me')}
        </Button>
      </div>
    </Row>
  </Container>
));
