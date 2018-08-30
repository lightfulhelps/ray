import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs/dist/vue';
import { Container, Row, Dropdown } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

const themes = {
  light: 'Light',
  dark: 'Dark',
};

const buttonSizes = {
  lg: 'Large',
  md: 'Medium',
  sm: 'Small',
};

const buttonThemes = {
  light: 'Light',
  dark: 'Dark',
};

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Dropdown.</h1>
    <Row>
      <div className="col-6">
        <Dropdown
          items={[
            {
              label: 'Edit',
              icon: 'edit',
              onClick: action('Edit'),
            },
            {
              label: 'Delete',
              icon: 'delete',
              onClick: action('Delete'),
            },
          ]}
          theme={select('Theme', themes, 'dark')}
          position={select('Position', { left: 'Left', right: 'Right' }, 'left')}
          buttonSize={select('Button Size', buttonSizes, 'sm')}
          buttonTheme={select('Button Theme', buttonThemes, 'light')}
          footer={text('Footer Text', 'Some footer text')}
        />
      </div>
    </Row>
  </Container>
));
