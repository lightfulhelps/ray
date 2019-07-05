import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Container } from '../';
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch';
import themes from './utils/themes';

import '../../scss/ray.scss';

const stories = storiesOf('ToggleSwitch', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">ToggleSwitch.</h1>
    <ToggleSwitch
      theme={select('Theme', themes, 'primary')}
      isDisabled={boolean('Disabled', false)}
      onClick={action('clicked')}
      labelRight={text('Text', 'Label on the right')}
      labelLeft={text('Text', null)}
    />
  </Container>
));
