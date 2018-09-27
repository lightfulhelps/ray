import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col, Button } from '../';
import allIcons from '../components/Icon/icons';

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
  white: 'White',
  'gray-600': 'Gray 600',
};

const sizes = {
  lg: 'Large',
  md: 'Medium',
  sm: 'Small',
};

const icons = {};

Object.keys(allIcons).forEach(key => {
  icons[key] = key;
});

const iconPositions = {
  left: 'left',
  right: 'right',
};

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Button.</h1>
    <Row>
      <Col xs={6}>
        <h2 className="h4 mb-2">Regular.</h2>
        <Button
          theme={select('Theme', themes, 'primary')}
          isBlock={boolean('Block', false)}
          isDisabled={boolean('Disabled', false)}
          isOutline={boolean('Outline', false)}
          onClick={action('clicked')}
          size={select('Size', sizes, 'md')}
          icon={boolean('Show Icon', false) && select('Icon', icons, 'addMedia')}
          iconPosition={
            boolean('Show Icon', false) && select('Icon Position', iconPositions, 'left')
          }
        >
          {text('Text', 'Click Me')}
        </Button>
      </Col>
      <Col xs={6}>
        <h2 className="h4 mb-2">Icon Only.</h2>
        <Button
          theme={select('Theme', themes, 'primary')}
          icon={select('Icon', icons, 'addMedia')}
          isDisabled={boolean('Disabled', false)}
          isOutline={boolean('Outline', false)}
          size={select('Size', sizes, 'md')}
        />
      </Col>
    </Row>
  </Container>
));
