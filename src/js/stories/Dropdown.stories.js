import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs/dist/vue';
import { Container, Row, Dropdown } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

const buttonSizes = {
  lg: 'Large',
  md: 'Medium',
  sm: 'Small',
};

const buttonThemes = {
  light: 'Light',
  dark: 'Dark',
};

const menuThemes = {
  light: 'Light',
  dark: 'Dark',
};

const iconColors = {
  currentColor: 'Default',
  '#5586ed': 'Facebook',
  '#1dcaff': 'Twitter',
  '#1c87bf': 'LinkedIn',
};

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Dropdown.</h1>
    <Row>
      <div className="col-6">
        <Dropdown
          buttonSize={select('Button Size', buttonSizes, 'sm')}
          buttonTheme={select('Button Theme', buttonThemes, 'light')}
          menuItems={[
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
          menuTheme={select('Menu Theme', menuThemes, 'dark')}
          menuPosition={select('Menu Position', { left: 'Left', right: 'Right' }, 'left')}
          menuFooter={text('Menu Footer', 'Some footer text')}
          iconColor={select('Icon Color', iconColors, 'currentColor')}
        />
      </div>
    </Row>
  </Container>
));
